import { Stack, VStack } from "@chakra-ui/layout";
import { Text, Heading, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NavBar } from "../../components/nav";
import { Footer } from "../../components/footer";
import { ParsedUrlQuery } from "querystring";
import { PortableText, sanityClient, urlFor } from "../../api/sanity";
import { BlockContentProps } from "@sanity/block-content-to-react";
import serializers from "../../server/serializers";

const ReactDOM = require("react-dom");
const BlockContent = require("@sanity/block-content-to-react");



const projectQuery = `*[_type == "post" && slug.current ==$slug][0] {
    _id,
    title,
	description,
    body,
    "cover": mainImage.asset -> url,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current,
	"lastUpdate": _updatedAt
  }`;

export const Project = ({
	project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const lastUpdate = new Date(Date.parse(project?.lastUpdate));
	return (
		<VStack>
		<VStack bg="purple.800" height="maxContent" spacing={6} width="full">
			<NavBar />
			<VStack
				p={["sm", 40, 40]}
				spacing={4}
				width="inherit"
				alignItems="center"
			>
				<Stack alignItems="center">
					<Heading
						size="xl"
						color="white"
						textAlign="center"
						fontWeight="semibold"
					>
						{project?.title}
					</Heading>
					<Text color="gray.400" fontSize="xs" fontWeight="semibold">
						Last updated on, {lastUpdate?.toDateString()}
					</Text>
				</Stack>
				<Stack
					borderRadius="md"
					spacing={4}
					alignItems="center"
					px={[4, 20, 20]}
				>
					<Text
						p={4}
						color="gray.400"
						fontSize="md"
						textAlign="center"
						fontWeight="regular"
					>
						{project?.description}
					</Text>
					<Image
						src={project?.cover}
						alt="Touch you"
						objectFit="cover"
						height="full"
						width="full"
					/>
				</Stack>
			</VStack>

			<Stack bg="white" px={[6, 60, 60]} py={6}>
				<PortableText blocks={project?.body} serializers={serializers} />
			</Stack>

			
		</VStack>
		<Footer />
		</VStack>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await sanityClient.fetch(
		`*[_type == "post" && defined(slug.current)] {
			"params": {
				"slug": slug.current
			}
		}`
	);

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const {slug = ""} = context.params as ParsedUrlQuery
	const project = await sanityClient.fetch(projectQuery, { slug });

	return {
		props: {
			project,
		},
	};
};

export default Project;
