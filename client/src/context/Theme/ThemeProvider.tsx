import { useEffect, useState, type ReactNode } from "react";
import ThemeContext from "./ThemeContext";
import type { Theme } from "@/types/theme.types";

export default function ThemeProvider({ children }: { children: ReactNode }) {
	// 1. initialize from localStorage
	const [theme, setTheme] = useState<Theme>(() => {
		const stored = localStorage.getItem("theme");
		return stored === "dark" ? "dark" : "light";
	});

	// 2. toggle (pure)
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	// 3. sync to DOM
	useEffect(() => {
		const html = document.documentElement;

		if (theme === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}, [theme]);

	// 4. persist to localStorage
	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	// 5. listen to system changes (only if no manual override)
	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			const stored = localStorage.getItem("theme");

			if (!stored) {
				setTheme(e.matches ? "dark" : "light");
			}
		};

		media.addEventListener("change", handleChange);

		return () => {
			media.removeEventListener("change", handleChange);
		};
	}, []);

	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme, isDarkMode: theme === "dark" }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
