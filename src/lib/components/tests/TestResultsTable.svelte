<script lang="ts">
	import type { TestRun } from '$lib/types';
	import { Pagination, PaginationItem, Table } from '@sveltestrap/sveltestrap';
	import { ICON_CHECK, ICON_WARN, ICON_X, paginate, preventDefault } from '$lib';
	import LinkOut from '$lib/components/LinkOut.svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { building } from '$app/environment';
	import Fa from 'svelte-fa';

	interface Props {
		runs: TestRun[];
	}

	const { runs }: Props = $props();
	let top: HTMLElement;
	let search: string = $state('');

	const pageParam = $derived(building ? null : page.url.searchParams.get('page'));

	const filtered = $derived(search.length < 1 ? runs : runs.filter(r => r.project.name.toLowerCase().includes(search.toLowerCase())));
	const pages = $derived(Math.ceil(filtered.length / 100.0));
	const paramPage = $derived(pageParam ? Number(pageParam) : 1);
	let currentPage = $derived(Math.min(paramPage, pages));
	const data = $derived(paginate(filtered, 100, Math.min(pages, currentPage)));
	$effect(() => {
		if (search) {
			currentPage = 1;
		}
	});

	async function setPage(pageNum: number) {
		await goto(`?page=${pageNum}`, { replaceState: true, noScroll: true });
		top.scrollIntoView();
	}
</script>

<h4 class="mb-4" bind:this={top}>Test results</h4>

<div class="w-fit mb-3 me-auto position-relative">
	<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
				 style="padding-left: 2.2rem" bind:value={search} />
	<Fa icon={faSearch} class="position-absolute vertical-middle text-body-secondary" style="left: 12px;" />
</div>

<Table bordered responsive>
	<colgroup>
		<col />
		<col style="width: 30%;" />
		<col />
		<col />
		<col />
		<col />
	</colgroup>
	<thead>
	<tr>
		<th>Icon</th>
		<th>Project</th>
		<th>Version</th>
		<th>Mod ID</th>
		<th>Result</th>
		<th>Link</th>
	</tr>
	</thead>
	<tbody>
	{#each data as run (run.project.id)}
		<tr>
			<td style="width: 40px; text-align: center">
				<img alt={run.project.slug} src={run.project.iconUrl} height="32px" />
			</td>
			<td class="fw-medium">
				{run.project.name}
			</td>
			<td>{run.versionNumber}</td>
			<td>
				<code>
					{run.result?.output?.primaryModid || '-'}
				</code>
			</td>
			<td>
				<div class="mx-auto px-4">
					<div class="row">
						<div class="col-2 px-0">
							{run.result && run.result.output?.success
								? run.result.errors
									? ICON_WARN
									: ICON_CHECK
								: ICON_X}
						</div>
						<div class="col col-10 text-center">
							{run.result?.output?.success ? 'Compatible' : 'Incompatible'}
						</div>
					</div>
				</div>
			</td>
			<td>
				<LinkOut href="https://modrinth.com/mod/{run.project.slug}" target="_blank">Link</LinkOut>
			</td>
		</tr>
	{/each}
	</tbody>
</Table>

<Pagination class="ms-auto w-fit" aria-label="Table pagination">
	<PaginationItem disabled={currentPage < 2}>
		<button class="page-link" onclick={preventDefault(() => setPage(currentPage - 1))}>
			Prev
		</button>
	</PaginationItem>

	{#each { length: pages } as p, i (i)}
		<PaginationItem active={currentPage === i + 1}>
			<button class="page-link" onclick={preventDefault(() => setPage(i + 1))}>{i + 1}</button>
		</PaginationItem>
	{/each}

	<PaginationItem disabled={currentPage >= pages}>
		<button class="page-link" onclick={preventDefault(() => setPage(currentPage + 1))}>
			Next
		</button>
	</PaginationItem>
</Pagination>
