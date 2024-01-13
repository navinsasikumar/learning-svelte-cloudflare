import { error } from '@sveltejs/kit';

export async function load({ params, platform }) {
  let result = await platform.env.DB.prepare(
    `SELECT * FROM names WHERE name = "${params.name}"`
  ).run();

	if (!result) throw error(404);
	if (result.results.length <= 0) throw error(404);
  const name = result.results[0];

	return {
		name
	};
}
