import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin']
			}
		}
	}
});
