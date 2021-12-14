import type {
	NextPage,
	GetStaticProps,
	GetStaticPaths,
	GetServerSideProps,
	InferGetStaticPropsType,
} from "next";
import { VStack, SimpleGrid, Text, Wrap } from "@chakra-ui/layout";
import { ProjectCard } from "../components/projectcard";
import Image from "next/image";
import Header from "../components/header";
import { Footer } from "../components/footer";

import { sanityClient, urlFor, PortableText } from "../lib/sanity";

const projectsQuery = `*[_type=="post"]{
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
			<Header />
			<VStack width={["full","full","full"]} spacing={10} px={4} py={4}>
				<Text fontSize="xl" fontWeight="semibold" alignSelf="start">
					Projects({data.length})
				</Text>
				<VStack>
					<SimpleGrid columns={[1, 2, 2]} spacing={[8, 8, 8]}>
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
