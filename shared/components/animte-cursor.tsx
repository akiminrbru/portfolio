"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimateCursor = () => {
	const [mousePosition, setMousePosition] = React.useState({
		x: 0,
		y: 0,
	});

	React.useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 8,
			y: mousePosition.y - 8,
		},
	};

	return (
		<motion.div
			className="bg-white h-4 w-4 rounded-[50%] fixed top-0 left-0 pointer-events-none"
			variants={variants}
			animate="default"></motion.div>
	);
};
