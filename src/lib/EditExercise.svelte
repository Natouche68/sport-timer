<script lang="ts">
	import { workoutConfig } from "$lib/stores";
	import * as Drawer from "$lib/components/ui/drawer";
	import { Button } from "$lib/components/ui/button";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Switch } from "$lib/components/ui/switch";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import MoreHorizontal from "lucide-svelte/icons/more-horizontal";

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

	function moveUp() {
		if (exerciseIndex > 0) {
			const thisExercise = $workoutConfig[exerciseIndex];
			const otherExercise = $workoutConfig[exerciseIndex - 1];
			$workoutConfig[exerciseIndex] = otherExercise;
			$workoutConfig[exerciseIndex - 1] = thisExercise;
		}
	}

	function moveDown() {
		if (exerciseIndex < $workoutConfig.length - 1) {
			const thisExercise = $workoutConfig[exerciseIndex];
			const otherExercise = $workoutConfig[exerciseIndex + 1];
			$workoutConfig[exerciseIndex] = otherExercise;
			$workoutConfig[exerciseIndex + 1] = thisExercise;
		}
	}

	function deleteExercise() {
		$workoutConfig = $workoutConfig.filter((_, i) => i !== exerciseIndex);
	}
</script>

<Drawer.Content class="container">
	<div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
		<Drawer.Header>
			<Drawer.Title class="flex justify-between items-center">
				<div>Edit an exercise</div>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<MoreHorizontal />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Group>
							<DropdownMenu.Item
								disabled={exerciseIndex === 0}
								on:click={moveUp}
							>
								Move up
							</DropdownMenu.Item>
							<DropdownMenu.Item
								disabled={exerciseIndex === $workoutConfig.length - 1}
								on:click={moveDown}
							>
								Move down
							</DropdownMenu.Item>
							<DropdownMenu.Item class="text-red-500" on:click={deleteExercise}>
								Delete
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Drawer.Title>
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
