import { error } from '@sveltejs/kit';

// export const prerender = 'auto';

export async function load({ params, platform }) {
  let result = await platform.env.DB.prepare(
    `SELECT * FROM names`
  ).run();

	if (!result) throw error(404);
  const names = result.results;

	return {
		names
	};
}
