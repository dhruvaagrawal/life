import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import type { FC, HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div
			className={cn("flex items-center justify-between gap-2 px-10 py-5", className)}
			{...props}
		>
			<div className="flex gap-10">
				<a href="/" className="text-2xl font-medium">
					life
				</a>
			</div>
			<div className="flex gap-4">
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Header;
