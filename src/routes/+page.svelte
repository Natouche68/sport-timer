<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Table from "$lib/components/ui/table";
	import Play from "lucide-svelte/icons/play";
	import Dumbbell from "lucide-svelte/icons/dumbbell";
	import Pencil from "lucide-svelte/icons/pencil";
	import PauseCircle from "lucide-svelte/icons/pause-circle";
</script>

<header
	class="fixed top-0 left-0 right-0 flex flex-col justify-center items-center"
>
	<h1 class="my-3 text-2xl font-bold">Sport Timer</h1>
	<Separator />
</header>

<main class="h-dvh flex flex-col md:flex-row justify-around items-center">
	<div class="w-3/4 md:w-1/3 relative">
		<svg viewBox="0 0 256 256" class="overflow-visible">
			<circle
				cx="128"
				cy="128"
				r="128"
				fill="none"
				stroke="currentColor"
				stroke-width="5"
			/>
		</svg>
		<div
			class="absolute inset-16 md:inset-24 flex flex-col justify-center items-center gap-6"
		>
			<div class="text-6xl md:text-8xl font-semibold">00:00,00</div>
			<Button variant="outline" size="icon" class="w-20 h-20 md:w-24 md:h-24">
				<Play class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
			</Button>
		</div>
	</div>
	<Card.Root class="md:w-1/3">
		<Card.Header>
			<Card.Title tag="h2">My Workout</Card.Title>
		</Card.Header>
		<Card.Content>
			<Table.Root>
				<Table.Body>
					<Table.Row>
						<Table.Cell>
							<Dumbbell />
						</Table.Cell>
						<Table.Cell class="font-medium">Gainage</Table.Cell>
						<Table.Cell>15s</Table.Cell>
						<Table.Cell class="text-right">
							<Button variant="outline" size="icon">
								<Pencil class="w-4 h-4" />
							</Button>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<Dumbbell />
						</Table.Cell>
						<Table.Cell class="font-medium">Pompes</Table.Cell>
						<Table.Cell>15s</Table.Cell>
						<Table.Cell class="text-right">
							<Button variant="outline" size="icon">
								<Pencil class="w-4 h-4" />
							</Button>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>
							<PauseCircle />
						</Table.Cell>
						<Table.Cell class="font-medium">Pause</Table.Cell>
						<Table.Cell>30s</Table.Cell>
						<Table.Cell class="text-right">
							<Button variant="outline" size="icon">
								<Pencil class="w-4 h-4" />
							</Button>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
</main>
