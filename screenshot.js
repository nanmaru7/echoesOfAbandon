#!/usr/bin/env node
/**
 * Screenshot utility for visual testing
 * Usage: node screenshot.js [options]
 *
 * Options:
 *   --url <url>        URL to screenshot (default: http://localhost:5173)
 *   --output <path>    Output path (default: ./screenshots/screenshot.png)
 *   --viewport <size>  Viewport size: desktop, tablet, mobile (default: desktop)
 *   --fullpage        Take full page screenshot
 *   --selector <sel>   Screenshot specific element
 *   --wait <ms>        Wait time before screenshot (default: 1000ms)
 */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name, defaultValue) => {
  const index = args.indexOf(`--${name}`);
  return index !== -1 && args[index + 1] ? args[index + 1] : defaultValue;
};
const hasFlag = (name) => args.includes(`--${name}`);

// Configuration
const config = {
  url: getArg('url', 'http://localhost:5173'),
  output: getArg('output', './screenshots/screenshot.png'),
  viewport: getArg('viewport', 'desktop'),
  fullPage: hasFlag('fullpage'),
  selector: getArg('selector', null),
  wait: parseInt(getArg('wait', '1000'), 10)
};

// Viewport presets
const viewports = {
  desktop: { width: 1920, height: 1080 },
  laptop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};

async function takeScreenshot() {
  console.log('Starting screenshot capture...');
  console.log('Config:', JSON.stringify(config, null, 2));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: viewports[config.viewport] || viewports.desktop
  });
  const page = await context.newPage();

  try {
    console.log(`Navigating to ${config.url}...`);
    await page.goto(config.url, { waitUntil: 'networkidle', timeout: 30000 });

    console.log(`Waiting ${config.wait}ms for page to settle...`);
    await page.waitForTimeout(config.wait);

    // Ensure output directory exists
    const outputDir = path.dirname(config.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Capturing screenshot...');
    if (config.selector) {
      const element = await page.locator(config.selector);
      await element.screenshot({ path: config.output });
      console.log(`Screenshot of ${config.selector} saved to ${config.output}`);
    } else {
      await page.screenshot({
        path: config.output,
        fullPage: config.fullPage
      });
      console.log(`Screenshot saved to ${config.output}`);
    }

  } catch (error) {
    console.error('Error taking screenshot:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

takeScreenshot();
