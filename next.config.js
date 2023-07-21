/** @type {import('next').NextConfig} */
const puppeteer = require('puppeteer')
const nextConfig = {}

module.exports = {
  serverRuntimeConfig: {
    puppeteerInstance: async () => {
      const browser = await puppeteer.launch({
        headless: 'new', args:
          [
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
      })
      return browser
    }
  },
}
