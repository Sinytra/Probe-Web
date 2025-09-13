<script lang="ts">
	import probeApi, { type ModCompatResponse } from '$lib/api/probeApi';
	// noinspection ES6UnusedImports
	import Fa from 'svelte-fa';
	import {
		faCheck,
		faDownload,
		faExternalLink,
		faInfoCircle,
		faQuestion,
		faXmark
	} from '@fortawesome/free-solid-svg-icons';
	import { Button, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import modrinth from '$lib/api/modrinth';
	import NeoForgeIcon from '$lib/assets/neo_fox.png';
	import TestAccuracyNotice from '$lib/components/tests/TestAccuracyNotice.svelte';

	interface Props {
		slug: string;
		onstart?: () => void;
		onfinish?: () => void;
		onclose?: () => void;
	}

	let { slug, onstart, onfinish, onclose }: Props = $props();

	// eslint-disable-next-line svelte/prefer-writable-derived
	let promise: Promise<ModCompatResponse> | null = $state(null);
	let showDisclaimer = $state(false);

	$effect(() => {
		promise = runTest(slug);
	});

	async function runTest(id: string): Promise<ModCompatResponse> {
		onstart?.();
		return probeApi
			.getModCompatibility(id)
			.then((res) => {
				onfinish?.();
				return res;
			})
			.catch((err) => {
				onfinish?.();
				throw err;
			});
	}
</script>

<div>
	{#if promise}
		{#await promise}
			<div
				class="d-flex gap-2 flex-column align-items-center bg-body-tertiary border rounded-1 px-3 py-4 mx-auto"
			>
				<p class="mb-0 fs-5 fw-medium">Testing mod compatibility...</p>
				<p class="mb-0 fs-7 text-body-secondary">
					This may take several seconds depending on the mod's size. Please stand by.
				</p>
			</div>
		{:then result}
			<div
				class="d-flex gap-2 flex-column bg-body-tertiary border rounded-1 p-3 mx-auto position-relative"
			>
				{#if onclose}
					<Button
						color=""
						class="position-absolute text-body-tertiary hover-text-body-secondary"
						style="top: 0.2rem; right: 0.2rem;"
						onclick={() => onclose()}
					>
						<Fa icon={faXmark} />
					</Button>
				{/if}

				<div class="d-flex flex-row gap-3">
					<img
						class="rounded-1"
						alt={result.project.slug}
						src={result.project.icon_url}
						width="40px"
						height="40px"
					/>
					<div class="d-flex flex-column text-start text-truncate">
						<span class="fw-bold fs-5 lh-1">{result.project.title}</span>
						<span class="fw-medium fs-7 text-secondary text-truncate"
							>{result.project.description}</span
						>
					</div>
				</div>

				{#if result.type === 'tested'}
					<Container fluid class="mt-1">
						<Row class="fs-6 text-start row-gap-1">
							<Col><span class="fw-medium">Mod ID:</span> <code>{result.modid}</code></Col>
							<Col><span class="fw-medium">MC Version:</span> <span>1.21.1</span></Col>
							<Col
								><span class="fw-medium">Mod Version:</span>
								<span class="text-nowrap">{result.version_number}</span>
							</Col>
						</Row>
					</Container>
				{/if}

				<div
					class="my-2 p-2 w-100 text-start px-3 fw-semibold rounded-2
									  {result.type === 'tested' ? (result.passing ? 'bg-success-subtle' : 'bg-danger-subtle') : ''}
                    {result.type === 'native' ? 'bg-orange-subtle' : ''}
                    {result.type === 'unavailable' ? 'bg-secondary-subtle' : ''}"
				>
					{#if result.type === 'tested' && result.passing}
						<Fa icon={faCheck} class="me-1 text-success" />
						Compatible
					{:else if result.type === 'tested' && !result.passing}
						<Fa icon={faXmark} size="lg" class="me-1 text-danger" />
						Incompatible
					{:else if result.type === 'native'}
						<img
							alt="NeoForge"
							src={NeoForgeIcon}
							class="me-1"
							height="22px"
							style="margin-bottom: 4px"
						/>
						Available for NeoForge
					{:else}
						<Fa icon={faQuestion} class="me-1 text-secondary" />
						Unavailable for game version and loader
					{/if}
				</div>

				<div class="d-flex flex-column-reverse gap-3 gap-md-2 flex-md-row justify-content-between">
					{#if result.type === 'tested'}
						<Button
							color="link"
							class="text-decoration-none serif hover-bg-body-secondary rounded-1 fs-7 px-1
						                            align-self-start align-self-md-end fw-medium p-1 text-body-secondary"
							onclick={() => (showDisclaimer = !showDisclaimer)}
						>
							<Fa size="sm" icon={faInfoCircle} />
							Disclaimer
						</Button>
					{/if}

					<div class="ms-md-auto">
						{#if result.type === 'tested' && result.passing}
							<a
								href={modrinth.getVersionURL(result.project.slug, result.version_id)}
								target="_blank"
							>
								<Button color="primary" class="w-md-fit mb-3 me-md-1 mb-md-0">
									<Fa class="me-1" icon={faDownload} size="sm" />
									Download
								</Button>
							</a>
						{/if}
						<a href={result.project.url} target="_blank">
							<Button
								color={result.type === 'tested' && result.passing ? 'secondary' : 'primary'}
								class="w-md-fit"
							>
								Visit
								<Fa class="ms-1" icon={faExternalLink} size="sm" />
							</Button>
						</a>
					</div>
				</div>

				{#if showDisclaimer}
					<div class="text-start pt-2">
						<TestAccuracyNotice />
					</div>
				{/if}
			</div>
			<!-- eslint-disable-next-line -->
		{:catch error}
			<div>
				<span class="text-danger">An unknown error has occurred. Please try again later.</span>
			</div>
		{/await}
	{/if}
</div>
