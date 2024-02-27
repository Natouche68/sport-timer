<script lang="ts">
	import "../app.pcss";
	import { ModeWatcher } from "mode-watcher";
	import { Separator } from "$lib/components/ui/separator";
</script>

<svelte:head>
	<title>Sport Timer</title>
</svelte:head>

<ModeWatcher />

<header
	class="fixed top-0 left-0 right-0 flex flex-col justify-center items-center"
>
	<h1 class="my-3 text-2xl font-bold">Sport Timer</h1>
	<Separator />
</header>

<slot />
