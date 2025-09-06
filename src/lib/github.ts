import { Octokit } from 'octokit';
import type { components } from '@octokit/openapi-types';
import type { TestReport } from '$lib/types';

interface TestedRelease {
	name: string;
	tagName: string;
	tests_url: string;
	created_at: string;
}

const INITIAL_RELEASE = '2.0.0-beta.8+1.21.1';

export async function getTestResults(releaseTag: string): Promise<TestReport | null> {
	const testsURL = `https://github.com/Sinytra/Connector/releases/download/${releaseTag}/results.json`;
	const resp = await fetch(testsURL);
	if (resp.ok) {
		return (await resp.json()) as TestReport;
	}
	return null;
}

export async function getLatestTestRelease(): Promise<TestedRelease | null> {
	const releases = await getReleases();
	if (releases.status !== 200) {
		return null;
	}

	const first = releases.data.find(containsTestAsset);
	return first
		? {
				name: first.name!,
				tagName: first.tag_name,
				tests_url: getTestsJsonUrl(first)!,
				created_at: first.created_at
			}
		: null;
}

export async function getTestedReleases(): Promise<TestedRelease[]> {
	const results = await getAllReleasesUpTo(INITIAL_RELEASE);
	const withTests = results.filter(containsTestAsset);

	return withTests.map((r) => ({
		name: r.name!,
		tagName: r.tag_name!,
		tests_url: getTestsJsonUrl(r)!,
		created_at: r.created_at
	}));
}

async function getAllReleasesUpTo(
	targetTagName: string | null,
	page?: number
): Promise<Awaited<ReturnType<Octokit['rest']['repos']['listReleases']>>['data']> {
	const results = await getReleases(page);
	if (!targetTagName) {
		return results.data;
	}

	const index = results.data.findIndex((r) => r.tag_name === targetTagName);
	if (index > -1) {
		return results.data.slice(0, index + 1);
	}

	const subData = await getAllReleasesUpTo(targetTagName, (page ?? 0) + 1);
	return [...results.data, ...subData];
}

async function getReleases(page?: number): ReturnType<Octokit['rest']['repos']['listReleases']> {
	const kit = new Octokit();

	return kit.rest.repos.listReleases({
		owner: 'Sinytra',
		repo: 'Connector',
		page
	});
}

function containsTestAsset(release: components['schemas']['release']): boolean {
	return release.assets.some((a) => a.name === 'results.json');
}

function getTestsJsonUrl(release: components['schemas']['release']): string | null {
	return release.assets.find((a) => a.name === 'results.json')?.browser_download_url ?? null;
}
