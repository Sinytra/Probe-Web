import { createUseQueryParams } from 'svelte-query-params';

const validators = {
	page: (value: unknown) => typeof value === 'number' && value > 0
};

export const useQueryParams = createUseQueryParams(validators);
