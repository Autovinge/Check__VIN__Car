import puppeteer from 'puppeteer'
import inlineCss from 'inline-css'
import hb from 'handlebars'

const args = [
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
let browser;

const generatePDF = async (html: string) => {
  const data = await inlineCss(html, { url: '/' })
  const template = hb.compile(data, { strict: true })
  const result = template(data)
  const parsedHTML = result

  if (!browser) browser = await puppeteer.launch({ args: args, headless: 'new' })

  const page = await browser.newPage()
  await page.setContent(parsedHTML, { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({ format: 'A4' })
  await page.close()
  return pdf

}

export default generatePDF
