import type { PageServerLoad } from './$types';

// interface TestedVersion {
// 	name: string;
// 	tests_url: string;
// 	created_at: string;
// }

export const load: PageServerLoad = async () => {
	// const kit = new Octokit();

	// const results = await kit.request('GET /repos/{owner}/{repo}/releases', {
	// 	owner: 'Sinytra',
	// 	repo: 'Connector',
	// 	headers: {
	// 		'X-GitHub-Api-Version': '2022-11-28'
	// 	}
	// });
	// const forMcVersion = results.data.filter((r) => (r.target_commitish = '1.21.x'));
	// const withTests = forMcVersion.filter((r) => r.assets.some((a) => a.name === 'results.json'));
	//
	// const versions: TestedVersion[] = withTests.map((r) => ({
	// 	name: r.name!,
	// 	tests_url: r.assets.find((a) => a.name === 'results.json')!.browser_download_url,
	// 	created_at: r.created_at
	// }));

	return {};
};
