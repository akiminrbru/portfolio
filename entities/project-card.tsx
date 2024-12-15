import { FilterImage } from "@/shared/components";
import Image from "next/image";
import React from "react";

interface Props {}

export const ProjectCard: React.FC<Props> = ({}) => {
	return (
		<div className="h-[60vh] flex flex-col gap-4">
			<Image
				className="w-full h-[90%]"
				src={"/assets/images/palm-tree.jpg"}
				width={100}
				height={100}
				alt="image"
			/>
			<span>Renovhouse</span>
		</div>
	);
};
