import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
	const [theme, setThemeState] = React.useState<"light" | "dark">("light");

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setThemeState(isDarkMode ? "dark" : "light");
	}, []);

	React.useEffect(() => {
		const isDark = theme === "dark";
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	const toggleTheme = () => {
		setThemeState(theme === "light" ? "dark" : "light");
	};

	return (
		<Button variant="ghost" size="icon" className="focus-visible:ring-0" onClick={toggleTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
