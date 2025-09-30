import type { PageServerLoad } from './$types';
import type { TestReport } from '$lib/types';
import { getLatestTestRelease } from '$lib/github';
import { error } from '@sveltejs/kit';
import { GITHUB_LINK_CONNECTOR } from '$lib';

export const load: PageServerLoad = async () => {
	const latest = await getLatestTestRelease();
	if (!latest) return error(404);

	const { tagName } = latest;
	const testsURL = `${GITHUB_LINK_CONNECTOR}/releases/download/${tagName}/results.json`;
	const resp = await fetch(testsURL);
	const report = (await resp.json()) as TestReport;

	return { report, tagName };
};
