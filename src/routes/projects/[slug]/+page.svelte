<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	export let data: PageData;

	const { project } = data.props;
</script>

<svelte:head>
	<title>Robin Lee Portfolio | {project.name}</title>
</svelte:head>

<div class="flex justify-center items-center sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img class="rounded-lg" src={project.image[0].url} alt={project.title} width="350" height="200" />
</div>

<h1 class="flex text-5xl font-extrabold mb-5 relative">
	<span>{project.name}</span>
</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if project.tags}
			{#each project.tags as tag}
				<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
	{#if project.demo}
		<a class="mr-5" href={project.demo}>Project Paper</a>
	{/if}
	<a href={project.sourceCode}>Source Code</a>
</div>

<div class="mb-5 prose prose-a:text-primary hover:prose-a:text-primary-focus text-ellipsis">
	<p class="font-semibold">Start date: {project.startDate}</p>
	{#if project.endDate}
		<p class="font-semibold">End date: {project.endDate}</p>
	{/if}
</div>

<article class="absolute overflow-x-scroll">
	<h1 class="text-3xl font-semibold">Tech Stack</h1>
	<span class="">{@html marked(project.techStack)}</span>
	<h1 class="text-3xl font-semibold mt-5">Project Description</h1>
	<span>{@html marked(project.description)}</span>
	{#if project.awards}
		<h1 class="text-3xl font-semibold mt-5">Awards</h1>
		<span class="text-center">{@html marked(project.awards)}</span>
	{/if}
</article>
