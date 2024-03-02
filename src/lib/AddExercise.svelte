<script lang="ts">
	import { workoutConfig } from "$lib/stores";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Switch } from "$lib/components/ui/switch";

	export let isDialogOpen: boolean;

	let name: string = "";
	let time: number = 30;
	let isPause: boolean = false;

	function addExercise() {
		$workoutConfig = [
			...$workoutConfig,
			{
				name,
				time,
				type: isPause ? "rest" : "exercise",
			},
		];

		name = "";
		time = 30;
		isPause = false;

		isDialogOpen = false;
	}

	function cancel() {
		name = "";
		time = 30;
		isPause = false;

		isDialogOpen = false;
	}
</script>

<Dialog.Content class="container">
	<Dialog.Header>
		<Dialog.Title>Edit an exercise</Dialog.Title>
	</Dialog.Header>
	<div class="my-1 flex flex-col gap-2">
		<Label for="name">Name</Label>
		<Input type="text" id="name" bind:value={name} />
	</div>
	<div class="my-1 flex flex-col gap-2">
		<Label for="time">Time</Label>
		<Input type="number" id="time" bind:value={time} />
	</div>
	<div class="my-1 flex flex-row items-center gap-2">
		<Switch id="is-pause" bind:checked={isPause} />
		<Label for="is-pause">Is it a pause ?</Label>
	</div>
	<Dialog.Footer>
		<Button variant="default" class="w-full" on:click={addExercise}>Add</Button>
		<Button variant="ghost" class="w-full" on:click={cancel}>Cancel</Button>
	</Dialog.Footer>
</Dialog.Content>
