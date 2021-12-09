import { SimpleGrid, VStack, Box, Container, Wrap } from "@chakra-ui/layout";
import { Stack, Image, Text, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ProjectPreview } from "../lib/utils";

export const ProjectCard = ({
	projectID,
	description,
	title,
	slug,
	imageUrl,
}: ProjectPreview) => {
	return (
		<VStack
			spacing={3}
			p={[2, 4]}
			bg="gray.50"
			borderRadius="lg"
			borderWidth="thin"
			alignItems="flex-start"
		>
			<Stack>
				<Image
					height={["sm", "400", "400"]}
					width={["sm", "300", "300"]}
					src={imageUrl}
					alt="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
					objectFit="cover"
					borderWidth="md"
					borderRadius="md"
				/>
			</Stack>
			<Stack
				p={[0, 2, 2]}
				height="maxContent"
				width={["sm", "300", "300"]}
				spacing={2}
				alignSelf="flex-start"
				alignItems="flex-start"
			>
				<Text
					p={[2, 0, 0]}
					fontSize="xl"
					fontWeight="semibold"
					color="blackAlpha.900"
					textTransform="capitalize"
					alignSelf="flex-start"
				>
					{title}
				</Text>
				<Box
					p={[2, 0, 0]}
					fontSize="sm"
					fontWeight="regular"
					color="blackAlpha.800"
					alignSelf="flex-start"
					noOfLines={[3, 5, 5]}
				>
					{description}
				</Box>
			</Stack>

			<Stack alignSelf="baseline">
				<Link href={`/projects/${slug}`} passHref>
					<Button justifyContent="center" size="sm" colorScheme="teal">
						Read More 👉
					</Button>
				</Link>
			</Stack>
		</VStack>
	);
};

export default ProjectCard;
