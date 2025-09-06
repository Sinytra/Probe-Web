import type { PageServerLoad } from './$types';
import { getTestedReleases } from '$lib/github';

export const load: PageServerLoad = async () => {
	const releases = await getTestedReleases();

	return { releases };
};
