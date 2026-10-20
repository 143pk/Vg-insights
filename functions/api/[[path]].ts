import { handleUniversalApiRequest } from '../../src/server/universalApi';

/**
 * Cloudflare Pages Functions catch-all handler for /api/* routes
 * Automatically compiled and deployed by Cloudflare Pages to handle all API endpoints at the edge.
 */
export async function onRequest(context: {
  request: Request;
  env: Record<string, any>;
  params: { path?: string | string[] };
}): Promise<Response> {
  return handleUniversalApiRequest(context.request, context.env);
}
