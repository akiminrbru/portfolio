import React from "react";
import { cn } from "../lib/utils";

interface Props {
	className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
	return <div className={cn("mx-auto px-6 w-full", className)}>{children}</div>;
};
