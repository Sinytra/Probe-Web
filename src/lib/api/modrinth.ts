import { USER_AGENT } from '$lib/api/common';

const ENDPOINT = 'https://api.modrinth.com/v2';
const GAME_VERSION = '1.21.1';
const LOADER = 'fabric';
const EXCLUDE_LOADER = 'neoforge';

export interface ModrinthSearchResult {
	project_id: string;
	slug: string;
	title: string;
	description: string;
	icon_url: string;
}

export interface SearchResponse {
	hits: ModrinthSearchResult[];
	total_hits: number;
}

async function searchMods(query: string, limit: number = 5): Promise<SearchResponse | null> {
	try {
		const facets = `[["project_types:mod"],["categories:${LOADER}"],["game_versions:${GAME_VERSION}"],["categories!=${EXCLUDE_LOADER}"]]`;

		const resp = await fetch(ENDPOINT + `/search?query=${query}&facets=${facets}&limit=${limit}`, {
			method: 'GET',
			headers: {
				'User-Agent': USER_AGENT
			}
		});
		if (!resp.ok) {
			return null;
		}

		const content = (await resp.json()) as SearchResponse;

		return {
			...content,
			hits: content.hits.map((r) => ({
				project_id: r.project_id,
				title: r.title,
				slug: r.slug,
				description: r.description,
				icon_url: r.icon_url
			}))
		};
	} catch (e) {
		console.error('Error searching mods', e);

		return null;
	}
}

function getVersionURL(slug: string, version_id: string): string {
	return `https://modrinth.com/mod/${slug}/version/${version_id}`;
}

export default {
	searchMods,
	getVersionURL
};
