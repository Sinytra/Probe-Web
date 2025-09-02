import type { PageServerLoad } from './$types';
import type { TestRun } from '$lib/types';

export const load: PageServerLoad = async () => {
	const testsURL =
		'https://github.com/Sinytra/Connector/releases/download/2.0.0-beta.8%2B1.21.1/results.json';
	const resp = await fetch(testsURL);
	const runs = (await resp.json()) as TestRun[];

	return { runs };
};
