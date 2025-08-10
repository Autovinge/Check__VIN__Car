import inlineCss from 'inline-css'
import hb from 'handlebars'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const generatePDF = async (html: string, tries: number = 3) => {
  console.log('[generatePDF] Start PDF generation. Tries left:', tries);
  try {
    // ჩაანაცვლეთ ყველა <img> src base64-ით (გარე სურათები)
    const fetch = (await import('node-fetch')).default;
    let htmlWithBase64 = html;
    // Carfax ლოგოს ჩანაცვლება ამოღებულია. ყველა <img> ჩასმული იქნება როგორც base64.

    // ყველა <img src="..."> ჩაანაცვლეთ base64-ით (გარდა data:image/... უკვე ჩაშენებულის)
    const imgRegex = /<img([^>]*?)src=["'](https?:[^"']+\.(?:png|jpg|jpeg|svg|gif))["']([^>]*?)>/gi;
    const matches: RegExpExecArray[] = [];
    let match;
    while ((match = imgRegex.exec(htmlWithBase64)) !== null) {
      matches.push(match);
    }
    for (const match of matches) {
      // Skip already replaced Carfax logos
      if (match[0].includes('data-carfax-logo="1"')) continue;
      const url = match[2];
      try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        let mime = 'image/png';
        if (url.endsWith('.jpg') || url.endsWith('.jpeg')) mime = 'image/jpeg';
        if (url.endsWith('.svg')) mime = 'image/svg+xml';
        if (url.endsWith('.gif')) mime = 'image/gif';
        const base64 = buffer.toString('base64');
        const base64Src = `data:${mime};base64,${base64}`;
        htmlWithBase64 = htmlWithBase64.replace(match[0], `<img${match[1]}src="${base64Src}"${match[3]}>`);
      } catch (e) {
        console.error('[generatePDF] Failed to fetch image for base64:', url, e);
      }
    }

    console.log('[generatePDF] Getting puppeteer instance...');
    const puppeteerInstance = await serverRuntimeConfig.puppeteerInstance();
    const parsedHTML = htmlWithBase64;
    console.log('[generatePDF] Creating new page...');
    const page = await puppeteerInstance.newPage();
    console.log('[generatePDF] Setting page content...');
    await page.setContent(parsedHTML, { waitUntil: 'networkidle0', timeout: 0 });
    console.log('[generatePDF] Generating PDF (landscape, wide)...');
    const pdf = await page.pdf({
      format: 'A3',
      landscape: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    await page.close();
    console.log('[generatePDF] PDF generation successful. Size:', pdf.length, 'bytes');
    return pdf;
  } catch (err) {
    console.error('[generatePDF] Error:', err);
    if (tries > 0) {
      console.log('[generatePDF] Retrying PDF generation. Tries left:', tries - 1);
      return generatePDF(html, tries - 1);
    } else {
      throw new Error('Could not generate pdf: ' + (err && err.message ? err.message : err));
    }
  }
}

export default generatePDF