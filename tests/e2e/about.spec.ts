// tests/e2e/about.spec.ts
import { test, expect } from '@playwright/test';
import { aboutFixture } from '../fixtures/about.fixture';

test.describe('About section (frontend only, mocked API)', () => {
  test.beforeEach(async ({ page }) => {
    // OPTIONAL: debug outgoing XHR/fetch requests to see exact endpoint URLs
    page.on('request', (req) => {
      const rt = req.resourceType();
      if (rt === 'xhr' || rt === 'fetch') {
        // These logs appear in your test runner output — use to confirm actual URLs.
        console.log('XHR/Fetch Request ->', req.method(), req.url());
      }
    });

    // Route all requests, but only intercept XHR/fetch requests and only those that look like API calls.
    // This prevents accidentally intercepting images/static assets.
    await page.route('**/*', async (route) => {
      const req = route.request();
      const rt = req.resourceType(); // 'xhr', 'fetch', 'document', 'image', ...
      const url = req.url();

      // Only handle XHR/fetch GET requests (these are the axios/fetch API calls)
      if ((rt === 'xhr' || rt === 'fetch') && req.method() === 'GET') {
        // If URL looks like the "about" endpoint -> respond with aboutFixture.about (array)
        // The regex checks for "about" as a segment, but won't match images with extensions.
        if (/\babout\b/i.test(url) && !url.match(/\.(png|jpe?g|svg|webp|gif)(\?.*)?$/i)) {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(aboutFixture.about),
          });
          return;
        }

        // If URL looks like a "feature(s)" endpoint, return features fixture
        if (/\bfeatures?\b/i.test(url) && !url.match(/\.(png|jpe?g|svg|webp|gif)(\?.*)?$/i)) {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(aboutFixture.features),
          });
          return;
        }

        // If you have a very specific feature endpoint name (e.g. about-features),
        // the regex above will still match because it contains "feature".
      }

      // Otherwise, continue the request untouched (static assets, other APIs, etc.)
      await route.continue();
    });
  });

  test('renders about content and feature cards from mocked API', async ({ page }) => {
    // goto root — baseURL is read from playwright config
    await page.goto('/');

    // use the test id you already added in About.vue
    const aboutSection = page.getByTestId('about-section');
    await expect(aboutSection).toBeVisible();

    // Subheading (h5)
    await expect(aboutSection.locator('h5')).toHaveText(aboutFixture.about[0].title);

    // Main heading (h1) — the fixture subtitle should appear
    await expect(aboutSection.locator('h1')).toHaveText(aboutFixture.about[0].subtitle);

    // Description
    await expect(aboutSection.locator('p')).toContainText(aboutFixture.about[0].description.slice(0, 10)); // partial check

    // Rotating icon src (the small icon)
    await expect(aboutSection.locator('img[alt="Rotating"]').first()).toHaveAttribute('src', aboutFixture.about[0].iconUrl);

    // Main image src (by alt attribute "About")
    await expect(aboutSection.locator('img[alt="About"]').first()).toHaveAttribute('src', aboutFixture.about[0].imageUrl);

    // Feature cards count and content
    const cards = aboutSection.locator('.grid > div'); // matches your template layout
    await expect(cards).toHaveCount(aboutFixture.features.length);

    // Check first feature title and icon
    await expect(cards.nth(0).locator('h4')).toHaveText(aboutFixture.features[0].featureTitle);
    await expect(cards.nth(0).locator(`img[alt="${aboutFixture.features[0].featureTitle}"]`)).toHaveAttribute('src', aboutFixture.features[0].featureIcon);
  });
});
