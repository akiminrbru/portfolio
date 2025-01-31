"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
	text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
	const words = text.split("");

	// Variants for Container of words.
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			className="text-9xl font-mono flex overflow-hidden"
			variants={container}
			initial="hidden"
			animate="visible">
			{words.map((word, index) => (
				<motion.span variants={child} style={{ marginRight: "5px" }} key={index}>
					{word}
				</motion.span>
			))}
		</motion.div>
	);
};
