export interface TestProject {
	projectId: string;
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
