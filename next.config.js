/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js")
const puppeteer = require('puppeteer')
const nextConfig = {}

module.exports = {
  serverRuntimeConfig: {
    puppeteerInstance: async () => {
      let browser;
      try {
        browser = await puppeteer.launch({
          headless: 'new',
          args: [
            '--no-sandbox',
            '--disable-setup-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process', // <- this one doesn't works in Windows
            '--disable-gpu'
          ]
        })
        if (!browser) throw new Error("Could not create puppeteer instance")
      } catch {
        process.exit(1)

      }
      return browser
    }
  },
  i18n
}
