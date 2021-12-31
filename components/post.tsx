import { Stack, VStack } from "@chakra-ui/layout";
import { Text, Heading, Image } from "@chakra-ui/react";
import { NavBar } from "./nav";
import { Footer } from "./footer";
import { PortableText, urlFor } from "../lib/sanity";
import serializers from "../server/serializers";

export const Post = ({ project }: any) => {
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

export default Post;
