// import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request, params, platform }) {
  let result = await platform.env.DB.prepare(
  `SELECT * FROM users WHERE id = ${params.slug}`
  ).run();
  return new Response(JSON.stringify(result));
}
