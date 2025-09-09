<script lang="ts">
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	// noinspection ES6UnusedImports
	import Fa from 'svelte-fa';
	import { debounce } from 'lodash-es';
	import modrinth, { type ModrinthSearchResult, type SearchResponse } from '$lib/api/modrinth';
	import { Button, ListGroup, ListGroupItem, Spinner } from '@sveltestrap/sveltestrap';
	import ModTestingDisplay from '$lib/components/tests/ModTestingDisplay.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	let showResults = $state(true);
	let search: string = $state('');
	let debounced = debounce(searchMods, 300);
	let results: SearchResponse | null = $state(null);
	let searching = $state(false);
	let internalUpdate = false;
	let inputElement: HTMLInputElement;

	let testingSlug: string | null = $state(null);
	let testing = $state(false);

	$effect(() => {
		// Thanks, "magic" dependencies
		(() => [search])();
		onSearchChange();
	});

	function onSearchChange() {
		if (internalUpdate) {
			internalUpdate = false;
			return;
		}

		if (search) {
			searching = true;
			debounced();
		} else {
			results = null;
		}
	}

	async function searchMods() {
		results = await modrinth.searchMods(search);
		searching = false;
	}

	async function selectResult(result: ModrinthSearchResult) {
		internalUpdate = true;
		search = result.slug;
		results = null;
		inputElement.blur();
		startTest();
	}

	async function goRunTest(event: Event) {
		event.preventDefault();
		startTest();
	}

	function startTest() {
		testingSlug = search;
		console.log('testing', testingSlug);
	}

	function openSearch() {
		showResults = true;
	}

	function closeSearch() {
		showResults = false;
	}

	function finishTesting() {
		testing = false;
		search = '';
	}
</script>

<div class="w-fit mb-3 position-relative {className}">
	<form onsubmit={goRunTest} class="text-center">
		<div class="d-flex flex-row gap-1 justify-content-center">
			<div class="position-relative">
				<input class="form-control" type="search" placeholder="Search Modrinth..." aria-label="Search"
							 style="padding-left: 2.2rem"
							 disabled={testing}
							 onfocus={openSearch}
							 onblur={closeSearch}
							 bind:this={inputElement}
							 bind:value={search} required
				/>
				<Fa icon={faSearch} class="position-absolute vertical-middle text-body-secondary" style="left: 12px;" />
			</div>
			<Button color="primary" type="submit" disabled={searching || testing} style="width: 108px">
				{#if testing}
					<Spinner color="white" size="sm" />
					Testing
				{:else}
					Check
				{/if}
			</Button>
		</div>

		<p class="fs-7 mt-3 mx-auto text-body-secondary">
			*We support Fabric-exclusive mods released for Minecraft 1.21.1
		</p>
	</form>

	{#if showResults && results}
		<div class="absolute-container bg-white rounded-1 shadow-sm" style="top: 48px;">
			<ListGroup class={results.total_hits > 0 ? 'rounded-bottom-0 border-bottom-0' : ''}>
				{#each results.hits as hit (hit.project_id)}
					<ListGroupItem class="hover-bg-body-secondary cursor-pointer d-flex flex-row gap-2 p-2"
												 onmousedown={e => e.preventDefault()}
												 onclick={() => selectResult(hit)}
					>
						<img class="rounded-1" alt={hit.slug} src={hit.icon_url} width="36px" height="36px" />
						<div class="d-flex flex-column text-start text-truncate">
							<span class="fw-bold fs-5 lh-1">{hit.title}</span>
							<span class="fw-medium fs-7 text-secondary text-truncate">{hit.description}</span>
						</div>
					</ListGroupItem>
				{/each}
				{#if results.total_hits > 0}
					<ListGroupItem class="h-auto text-start fs-7 px-2 py-1 rounded-bottom-2">
						Showing <b>{results.hits.length}</b> out of <b>{results.total_hits}</b> hits
					</ListGroupItem>
				{:else}
					<ListGroupItem class="h-auto fs-6 fw-semibold">
						No results found.
					</ListGroupItem>
				{/if}
			</ListGroup>
		</div>
	{/if}
</div>

{#if testingSlug}
	<ModTestingDisplay slug={testingSlug}
										 onstart={() => testing = true}
										 onfinish={finishTesting}
										 onclose={() => testingSlug = null}
	/>
{/if}