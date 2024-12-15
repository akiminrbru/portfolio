import { Container } from "@/shared/components";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
	return (
		<footer>
			<Container>
				<span className="font-mono text-8xl">
					Oleg <br></br> akimin
				</span>
				<p className="font-sans text-4xl">Portfolio ©2024</p>
			</Container>
		</footer>
	);
};
