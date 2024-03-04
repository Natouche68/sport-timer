<script lang="ts">
	import { workoutConfig, currentData } from "$lib/stores";
	import Timer from "$lib/Timer.svelte";
	import WorkoutConfig from "$lib/WorkoutConfig.svelte";
	import * as Tabs from "$lib/components/ui/tabs";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const currentTab = writable("config-1");

	onMount(() => {
		const savedConfig = JSON.parse(
			localStorage.getItem("workoutConfig1") || "[]"
		);
		workoutConfig.set(savedConfig);

		workoutConfig.subscribe((config) => {
			localStorage.setItem(
				`workoutConfig${$currentData.currentConfig}`,
				JSON.stringify(config)
			);
		});

		currentTab.subscribe((tab) => {
			localStorage.setItem(
				`workoutConfig${$currentData.currentConfig}`,
				JSON.stringify($workoutConfig)
			);

			let savedConfig: any;

			switch (tab) {
				case "config-1":
					$currentData.playing = false;
					$currentData.currentConfig = 1;
					savedConfig = JSON.parse(
						localStorage.getItem("workoutConfig1") || "[]"
					);
					workoutConfig.set(savedConfig);
					break;

				case "config-2":
					$currentData.playing = false;
					$currentData.currentConfig = 2;
					savedConfig = JSON.parse(
						localStorage.getItem("workoutConfig2") || "[]"
					);
					workoutConfig.set(savedConfig);
					break;

				case "config-3":
					$currentData.playing = false;
					$currentData.currentConfig = 3;
					savedConfig = JSON.parse(
						localStorage.getItem("workoutConfig3") || "[]"
					);
					workoutConfig.set(savedConfig);
					break;
			}
		});
	});
</script>

<main
	class="min-h-screen md:h-screen flex flex-col md:flex-row justify-around items-center overflow-x-hidden"
>
	<Timer />
	<Tabs.Root bind:value={$currentTab} class="md:w-1/3 mb-8 md:mb-0 md:mt-12">
		<Tabs.List class="w-full grid grid-cols-3">
			<Tabs.Trigger value="config-1">Config 1</Tabs.Trigger>
			<Tabs.Trigger value="config-2">Config 2</Tabs.Trigger>
			<Tabs.Trigger value="config-3">Config 3</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="config-1">
			<WorkoutConfig />
		</Tabs.Content>
		<Tabs.Content value="config-2">
			<WorkoutConfig />
		</Tabs.Content>
		<Tabs.Content value="config-3">
			<WorkoutConfig />
		</Tabs.Content>
	</Tabs.Root>
</main>
