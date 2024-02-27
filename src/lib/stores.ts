import { writable } from "svelte/store";

type WorkoutConfig = {
	type: "exercise" | "rest";
	name: string;
	time: number;
}[];

export const workoutConfig = writable<WorkoutConfig>([
	{
		type: "exercise",
		name: "Gainage",
		time: 15,
	},
	{
		type: "rest",
		name: "Pause",
		time: 30,
	},
	{
		type: "exercise",
		name: "Pompes",
		time: 15,
	},
]);

type CurrentData = {
	playing: boolean;
	currentlyDoing: number;
};

export const currentData = writable<CurrentData>({
	playing: false,
	currentlyDoing: 0,
});
