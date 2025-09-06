import type { PageServerLoad } from './$types';
import { getLatestTestRelease } from '$lib/github';

export const load: PageServerLoad = async () => {
	const latest = await getLatestTestRelease();
	return { latest };
};
