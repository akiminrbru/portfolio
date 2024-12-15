import { ProjectCard } from "@/entities";
import { Container, Title } from "@/shared/components/";
import { MainBanner, Skills } from "@/widgets";

export default function Home() {
	return (
		<main>
			<Container className="flex flex-col gap-20">
				<MainBanner />
				<Skills />
				<div className="flex flex-col gap-8">
					<Title text="Проекты" />
					<div className="grid grid-cols-2 gap-4">
						<ProjectCard />
						<ProjectCard />
					</div>
				</div>
			</Container>
		</main>
	);
}
