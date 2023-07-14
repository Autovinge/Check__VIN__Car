import puppeteer from 'puppeteer'
import inlineCss from 'inline-css'
import hb from 'handlebars'

const generatePDF = async (html: string) => {
  let args = [
    '--no-sandbox',
    "--disable-setup-sandbox",
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--no-first-run',
    '--no-zygote',
    '--single-process', // <- this one doesn't works in Windows
    '--disable-gpu'
  ]
  const data = await inlineCss(html, { url: '/' })
  const template = hb.compile(data, { strict: true })
  const result = template(data)
  const parsedHTML = result

  const browser = await puppeteer.launch({ args: args, headless: 'new' })
  const page = await browser.newPage()
  await page.setContent(parsedHTML, { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({ format: 'A4' })
  await browser.close()
  return pdf
}

export default generatePDF
