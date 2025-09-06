import type { PageServerLoad } from './$types';
import type { TestReport } from '$lib/types';

export const load: PageServerLoad = async () => {
	const tagName = '2.0.0-beta.9+1.21.1';
	const testsURL = `https://github.com/Sinytra/Connector/releases/download/${tagName}/results.json`;
	const resp = await fetch(testsURL);
	const report = (await resp.json()) as TestReport;

	return { report, tagName };
};
