import { handleUniversalApiRequest } from './universalApi';

/**
 * Cloudflare Worker entry point for Wrangler deployments with static assets
 */
export default {
  async fetch(request: Request, env: any, _ctx: any): Promise<Response> {
    const url = new URL(request.url);

    // 1. Ads.txt verification
    if (url.pathname === '/ads.txt') {
      return new Response('google.com, pub-8902157215045513, DIRECT, f08c47fec0942fa0\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    // 2. API Routes
    if (
      url.pathname.startsWith('/api/') ||
      url.pathname === '/api' ||
      url.pathname === '/wp-admin/admin-post.php'
    ) {
      return handleUniversalApiRequest(request, env);
    }

    // 3. Static Assets from dist directory (handled by Cloudflare Asset binding)
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  },
};
