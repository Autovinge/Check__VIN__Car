import inlineCss from 'inline-css'
import hb from 'handlebars'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const generatePDF = async (html: string) => {
  const puppeteerInstance = await serverRuntimeConfig.puppeteerInstance()
  const data = await inlineCss(html, { url: '/' })
  const template = hb.compile(data, { strict: true })
  const result = template(data)
  const parsedHTML = result

  const page = await puppeteerInstance.newPage()
  await page.setContent(parsedHTML, { waitUntil: 'networkidle0', timeout:0 })
  const pdf = await page.pdf({ format: 'A4' })
  await page.close()
  console.log(pdf)
  return pdf
}

export default generatePDF
