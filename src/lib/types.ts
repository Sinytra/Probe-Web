export interface TestProject {
	id: string;
	name: string;
	icon_url: string;
	slug: string;
	version_id: string;
}

export interface TestOutput {
	success: boolean;
	primary_modid?: string;
}

export interface TestResult {
	output?: TestOutput;
	errors: boolean;
}

export interface TestRun {
	project: TestProject;
	version_number: string;
	result?: TestResult;
}

export interface TestEnvironment {
	transformer_version: string | null;
	transformer_hash: string | null;
	runner_version: string | null;
	neoform_runtime_version: string;
	neoforge_version: string;
	game_version: string;
	compatible_game_versions: string[];
}

export interface TestReport {
	results: TestRun[];
	environment: TestEnvironment;
	duration_seconds: number;
	tested_at: string;
}
