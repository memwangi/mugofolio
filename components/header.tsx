import { SimpleGrid, VStack, Box } from "@chakra-ui/layout";
import { Text, Heading, Button } from "@chakra-ui/react";
import NavBar from "./nav";

export const Header = () => {
	return (
		<VStack spacing="2" bgGradient="linear(to-b, #5629E8, purple.300 )">
			<NavBar />
			<VStack
				px={[8, 20, 20]}
				py={[4, 10, 10]}
				height="80%"
				alignItems="self-start"
				spacing={10}
				width={["maxContent", "80%", "80%"]}
			>
				<Text
					color="white"
					fontWeight="semibold"
					fontSize={["4xl", "5xl", "5xl"]}
				>
					Hi<span>👋</span> , It&apos;s Joseph :)
				</Text>
				<Text fontSize={["md", "xl", "xl"]} color="gray.200">
					A multidisciplinary digital product designer who codes and writes. I
					thrive in breaking down complex problems into use cases and ultimately
					designing solutions that are a joy to own and use, on both mobile and
					web user interfaces.
				</Text>

				<Button size="md" colorScheme="teal">
					See Recent Work 👇
				</Button>
			</VStack>
		</VStack>
	);
};

export default Header;
