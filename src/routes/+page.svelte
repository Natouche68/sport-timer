<script lang="ts">
	import { workoutConfig } from "$lib/stores";
	import Timer from "$lib/Timer.svelte";
	import WorkoutConfig from "$lib/WorkoutConfig.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		const savedConfig = JSON.parse(
			localStorage.getItem("workoutConfig1") || "[]"
		);
		workoutConfig.set(savedConfig);

		workoutConfig.subscribe((config) => {
			localStorage.setItem("workoutConfig1", JSON.stringify(config));
		});
	});
</script>

<main
	class="min-h-dvh md:h-screen flex flex-col md:flex-row justify-around items-center overflow-x-hidden"
>
	<Timer />
	<WorkoutConfig />
</main>
