import { Stack, VStack, Box, Container } from "@chakra-ui/layout";
import { Text, Heading, Image, Button } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NavBar } from "../../components/nav";
import { Footer } from "../../components/footer";
import { ParsedUrlQuery } from "querystring";
import { PortableText, sanityClient, urlFor } from "../../lib/sanity";
import React from "react";

const ReactDOM = require("react-dom");
const BlockContent = require("@sanity/block-content-to-react");

interface IParams extends ParsedUrlQuery {
	slug: string;
}

const serializers = {
	list: (props) => {
		const { type } = props;
		const bullet = type === "bullet";
		if (bullet) {
			return <ul>{props.children}</ul>;
		}
		return <ol>{props.children}</ol>;
	},
	listItem: (props) => <li>{props.children}</li>,

	types: {
		code: (props) => (
			<pre data-language={props.node.language}>
				<code>{props.node.code}</code>
			</pre>
		),
		mainImage: (props) => (
			<figure>
				<Image
					p={4}
					src={urlFor(props.node.asset)}
					alt={props.node.alt}
					width="600"
					style={{ borderRadius: "5px" }}
				/>

				<figcaption>{props.node.caption}</figcaption>
			</figure>
		),
		block(props) {
			switch (props.node.style) {
				case "h1":
					return (
						<Heading
							as="h1"
							py={2}
							size="xl"
							color="black.600"
							fontWeight="bold"
						>
							{props.children}
						</Heading>
					);

				case "h2":
					return (
						<Heading as="h2" py={2} size="lg">
							{props.children}
						</Heading>
					);

				case "h3":
					return (
						<Heading as="h3" py={2} size="md">
							{props.children}
						</Heading>
					);

				case "h4":
					return (
						<Heading as="h4" py={2} size="md">
							{props.children}
						</Heading>
					);

				case "blockquote":
					return <blockquote className="">{props.children}</blockquote>;

				case "normal":
					return <Text fontSize="xl">{props.children}</Text>;

				default:
					return <Text fontSize="xl">{props.children}</Text>;
			}
		},
	},
};

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
	const post = project;
	const lastUpdate = new Date(Date.parse(post.lastUpdate));
	return (
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
						{post.title}
					</Heading>
					<Text color="gray.400" fontSize="xs" fontWeight="semibold">
						Last updated on, {lastUpdate.toDateString()}
					</Text>
				</Stack>
				<Stack borderRadius="md" spacing={4} alignItems="center" px={[4, 20, 20]}>
					<Text
						p={4}
						color="gray.400"
						fontSize="md"
						textAlign="center"
						fontWeight="regular"
					>
						{post.description}
					</Text>
					<Image
							src={post.cover}
							alt="Touch you"
							objectFit="cover"
							height="full"
							width="full"
						/>
				</Stack>
			</VStack>

			<Stack bg="white" px={[6, 60, 60]} py={6}>
				<PortableText blocks={post?.body} serializers={serializers} />
			</Stack>

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
	const { slug } = context.params as IParams;
	const project = await sanityClient.fetch(projectQuery, { slug });

	return {
		props: {
			project,
		},
	};
};

export default Project;
