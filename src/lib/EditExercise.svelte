<script lang="ts">
	import { workoutConfig } from "$lib/stores";
	import * as Drawer from "$lib/components/ui/drawer";
	import { Button } from "$lib/components/ui/button";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Switch } from "$lib/components/ui/switch";

	export let exerciseIndex: number;

	let name: string = $workoutConfig[exerciseIndex].name;
	let time: number = $workoutConfig[exerciseIndex].time;
	let isPause: boolean = $workoutConfig[exerciseIndex].type === "rest";

	function submitChanges() {
		$workoutConfig[exerciseIndex].name = name;
		$workoutConfig[exerciseIndex].time = time;
		$workoutConfig[exerciseIndex].type = isPause ? "rest" : "exercise";
	}

	function cancelChanges() {
		name = $workoutConfig[exerciseIndex].name;
		time = $workoutConfig[exerciseIndex].time;
		isPause = $workoutConfig[exerciseIndex].type === "rest";
	}
</script>

<Drawer.Content class="container">
	<div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
		<Drawer.Header>
			<Drawer.Title>Edit an exercise</Drawer.Title>
		</Drawer.Header>
		<div class="px-4 my-4 flex flex-col gap-2">
			<Label for="name">Name</Label>
			<Input type="text" id="name" bind:value={name} />
		</div>
		<div class="px-4 my-4 flex flex-col gap-2">
			<Label for="time">Time</Label>
			<Input type="number" id="time" bind:value={time} />
		</div>
		<div class="px-4 my-4 flex flex-row items-center gap-2">
			<Switch id="is-pause" bind:checked={isPause} />
			<Label for="is-pause">Is it a pause ?</Label>
		</div>
		<Drawer.Footer>
			<Drawer.Close>
				<Button variant="default" class="w-full" on:click={submitChanges}>
					Submit
				</Button>
			</Drawer.Close>
			<Drawer.Close>
				<Button variant="ghost" class="w-full" on:click={cancelChanges}>
					Cancel
				</Button>
			</Drawer.Close>
		</Drawer.Footer>
	</div>
</Drawer.Content>
