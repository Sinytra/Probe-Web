import { USER_AGENT } from '$lib/api/common';

const ENDPOINT = 'https://probe.sinytra.org';
const PLATFORM = 'modrinth';

export type ProjectPlatform = 'modrinth' | 'curseforge';

export interface TestEnvironment {
	connector_version: string;
	game_version: string;
	neo_forge_version: string;
}

export interface TestProject {
	id: string;
	slug: string;
	title: string;
	description: string;
	icon_url: string | null;
	url: string;
	platform: ProjectPlatform;
}

export type ResultType = 'tested' | 'native' | 'unavailable';

export interface ModCompatBaseResponse {
	project: TestProject;
	type: ResultType;
}

export interface ModCompatTestedResponse extends ModCompatBaseResponse {
	type: 'tested';
	modid: string;
	version_number: string;
	version_id: string;
	passing: boolean;
	environment: TestEnvironment;
	created_at: string;
}

export interface ModCompatNativeResponse extends ModCompatBaseResponse {
	type: 'native';
	game_version: string;
}

export interface ModCompatUnavailableResponse extends ModCompatBaseResponse {
	type: 'unavailable';
	loader: string;
	game_version: string;
}

export type ModCompatResponse =
	| ModCompatTestedResponse
	| ModCompatNativeResponse
	| ModCompatUnavailableResponse;

async function getModCompatibility(slug: string): Promise<ModCompatResponse> {
	try {
		const body = {
			platform: PLATFORM,
			id: slug,
			game_version: '1.21.1'
		};

		const resp = await fetch(ENDPOINT + '/api/v1/probe', {
			method: 'POST',
			headers: {
				'User-Agent': USER_AGENT,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (!resp.ok) {
			console.error('Unexpected probe response', resp.status);
			throw new Error(resp.statusText);
		}

		return (await resp.json()) as ModCompatResponse;
	} catch (error) {
		console.error('Error getting mod compat status', error);

		throw error;
	}
}

export default {
	getModCompatibility
};
