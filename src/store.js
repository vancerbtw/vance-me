import { writable } from 'svelte/store';

export const darkTheme = writable(localStorage.getItem("darkMode") === "true");
export const y = writable(0);