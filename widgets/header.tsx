import React from "react";
import Link from "next/link";
import { Container } from "@/shared/components";

interface Props {}

export const Header = (props: Props) => {
	return (
		<header>
			<Container className="flex justify-between py-5">
				<Link href={"/"} className="font-bold font-mono text-3xl">
					Akmn
				</Link>
			</Container>
		</header>
	);
};
