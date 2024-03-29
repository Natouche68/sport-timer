<script lang="ts">
	import { currentData, workoutConfig } from "$lib/stores";
	import { onMount } from "svelte";
	import { Button } from "$lib/components/ui/button";
	import Play from "lucide-svelte/icons/play";
	import Pause from "lucide-svelte/icons/pause";

	let time: number = 0;
	let maxTime: number = 0;
	let bip: HTMLAudioElement;
	$: {
		if ($workoutConfig.length === 0) {
			time = 0;
			maxTime = 0;
		} else {
			time = $workoutConfig[$currentData.currentlyDoing].time;
			maxTime = $workoutConfig[$currentData.currentlyDoing].time;
		}
	}

	onMount(() => {
		bip = new Audio("/bip.mp3");

		const interval = setInterval(() => {
			if ($currentData.playing) {
				time -= 0.01;

				if (time <= 0) {
					$currentData.currentlyDoing++;
					if ($currentData.currentlyDoing >= $workoutConfig.length) {
						$currentData.currentlyDoing = 0;
						$currentData.playing = false;
					}
					bip.play();
				}
			}
		}, 10);

		return () => clearInterval(interval);
	});

	function startOrPause() {
		if (!$currentData.playing) {
			$currentData.playing = true;
			bip.play();
		} else {
			$currentData.playing = false;
			$currentData.currentlyDoing = 0;
		}
	}

	function formatTime(time: number): string {
		return `${Math.floor(time / 60)}:${(time % 60)
			.toFixed(2)
			.padStart(5, "0")}`;
	}
</script>

<div class="w-3/4 md:w-1/3 mt-20 mb-12 md:my-0 relative">
	<svg viewBox="0 0 256 256" class="overflow-visible">
		<circle
			cx="128"
			cy="128"
			r="128"
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			stroke-dasharray="804"
			stroke-dashoffset={(1 - time / maxTime) * 804}
			stroke-linecap="round"
			class="origin-center -rotate-90 {$workoutConfig.length > 0
				? 'text-primary'
				: 'text-muted'}"
		/>
	</svg>
	<div
		class="absolute inset-16 md:inset-24 flex flex-col justify-center items-center"
	>
		{#if $currentData.playing}
			<div class="text-xl text-muted-foreground">
				{$workoutConfig[$currentData.currentlyDoing].name}
			</div>
		{/if}
		<div
			class="text-6xl md:text-8xl font-semibold mb-6"
			class:text-muted-foreground={$workoutConfig.length < 1}
		>
			{formatTime(time)}
		</div>
		<Button
			variant="secondary"
			size="icon"
			class="w-20 h-20 md:w-24 md:h-24"
			disabled={$workoutConfig.length < 1}
			on:click={startOrPause}
		>
			{#if $currentData.playing}
				<Pause class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
			{:else}
				<Play class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
			{/if}
		</Button>
	</div>
</div>
