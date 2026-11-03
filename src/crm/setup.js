/**
 * FG Group CRM tracking for this site: cookie banner, visitor tracker, and the link that makes an inquiry and the
 * visitor's browsing one lead. Site key 'fggroup-ebooks' is registered in fg-api src/config/website-sources.js, which
 * sends this site's leads to the FGIIT section of the CRM. How it works: ./fg-crm-tracking.js
 */
import { initCrmTracking } from './fg-crm-tracking';

// This site has no API config of its own: production domains use the live API, everything else the dev API.
const host = window.location.hostname;
const isDev = host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.') || host.startsWith('test');
const apiBase = isDev ? 'https://dev-api.fggroup.in' : 'https://api.fggroup.in';

initCrmTracking({
  apiBase: apiBase,
  siteKey: 'fggroup-ebooks',
  brand: 'FG Group',
  accent: '#f97316',
  profileKeys: [],
});
