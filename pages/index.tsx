import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { VStack, SimpleGrid, Text, Wrap } from "@chakra-ui/layout";
import { ProjectCard } from "../components/projectcard";
import Image from "next/image";
import Header2 from "../components/header2";
import { Footer } from "../components/footer";
import { groq } from "next-sanity";

import { sanityClient } from "../lib/sanity.server";

const projectsQuery = groq`*[_type=="post"]{
	_id,
	title,
	slug,
	releaseDate,
	author,
	categories,
	publishedAt,
	description,
	"cover": mainImage.asset -> url
  }`;

type Project = {
	title: string;
};

const Home: NextPage = ({
	projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const data = [...projects];
	return (
		<VStack width="100vw">
			<Header2 />
			<VStack width={["full", "full", "full"]} spacing={10} px={4} py={4}>
				<VStack>
					<Text fontSize="xl" fontWeight="semibold" alignSelf="start">
						Projects({data.length})
					</Text>
					<SimpleGrid columns={[1, 2, 2]} spacing={[4, 8, 8]}>
						{data.map((project, index) => (
							<ProjectCard
								projectID={project._id}
								description={project.description}
								slug={project.slug.current}
								imageUrl={project.cover}
								title={project.title}
								key={index}
							/>
						))}
					</SimpleGrid>
				</VStack>
			</VStack>
			<Footer />
		</VStack>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const projects = await sanityClient.fetch(projectsQuery);

	return {
		props: {
			projects,
		},
	};
};

export default Home;
