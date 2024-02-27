<script lang="ts">
	import "../app.pcss";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Separator } from "$lib/components/ui/separator";
	import { Button } from "$lib/components/ui/button";
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
</script>

<svelte:head>
	<title>Sport Timer</title>
</svelte:head>

<ModeWatcher />

<header
	class="fixed top-0 left-0 right-0 flex flex-col justify-center items-center"
>
	<div class="my-3 w-full text-center relative">
		<h1 class="text-2xl font-bold">Sport Timer</h1>
		<Button
			variant="outline"
			size="icon"
			class="absolute right-1 -top-1"
			on:click={toggleMode}
		>
			<Sun class="w-4 h-4 block dark:hidden" />
			<Moon class="w-4 h-4 hidden dark:block" />
		</Button>
	</div>
	<Separator />
</header>

<slot />
