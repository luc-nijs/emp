import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.embodiedmusicpedagogy.org',
  // Old Wix address that has a new name, so existing links keep working.
  redirects: {
    '/copy-of-publications': '/on-emp',
  },
});
