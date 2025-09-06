import type { PageServerLoad } from './$types';
import { getTestResults } from '$lib/github';
import type { TestReport } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const version = params.version;
	let report: TestReport | null = null;
	try {
		report = await getTestResults(version);
	} catch (e: unknown) {
		console.error('Error getting test results for version', version, e);
	}

	if (!report) {
		return error(404, { message: 'Not found' });
	}

	return { version, report };
};
