const express = require("express");
const app = express();
const path = require("path");
const SaveToExistingDirectoryPlugin = require("website-scraper-existing-directory");

const puppeteer = require("puppeteer");

// or with callback

app.listen(process.env.PORT || 5001);

app.use((req, res, next) => {
  res.append("Cache-Control", "123123123123");

  next();
});

const RENDER_CACHE = new Map();

async function ssr(url) {
  if (RENDER_CACHE.has(url)) {
    return RENDER_CACHE.get(url);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(url);

  const html = await page.content();
  await browser.close();

  RENDER_CACHE.set(url, html);

  return html;
}

app.use(
  express.static(path.join(__dirname, "./build"), {})
);
app.get("/", async (req, res) => {});
