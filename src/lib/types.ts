export interface TestProject {
	id: string;
	name: string;
	iconUrl: string;
	slug: string;
	versionId: string;
}

export interface TestOutput {
	success: boolean;
	primaryModid?: string;
}

export interface TestResult {
	output?: TestOutput;
	errors: boolean;
}

export interface TestRun {
	project: TestProject;
	versionNumber: string;
	result?: TestResult;
}

export interface TestEnvironment {
	transformerVersion: string | null;
	transformerHash: string | null;
	runnerVersion: string | null;
	neoFormRuntimeVersion: string;
	neoForgeVersion: string;
	gameVersion: string;
	compatibleGameVersions: string[];
}

export interface TestReport {
	results: TestRun[];
	environment: TestEnvironment;
	durationSeconds: number;
	testedAt: string;
}
