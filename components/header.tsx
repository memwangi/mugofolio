import {
	SimpleGrid,
	VStack,
	HStack,
	Stack,
	Box,
	Container,
	WrapItem,
} from "@chakra-ui/layout";
import { Text, Heading, Button } from "@chakra-ui/react";
import joseph from "../public/portjo.png";
import Image from "next/image";
import NavBar from "./nav";
import { useBreakpointValue } from '@chakra-ui/react'

export const Header = () => {
	const hidden = useBreakpointValue({default:"false", other: "true"})
	return (
		<VStack
			bgGradient="linear(to-b, #5629E8, purple.300 )"
			width={["full", "full", "full"]}
			px={[8, 20, 20]}
		>
			<NavBar />
			<HStack>
				<VStack
					px={[8, 20, 20]}
					py={[4, 10, 10]}
					alignSelf="flex-start"
					width={["full","70%"]}
					height="maxContent"
					alignItems="self-start"
					spacing={6}
				>
					<Text
						color="white"
						fontWeight="semibold"
						fontSize={["3xl", "5xl", "5xl"]}
					>
						Hi<span>👋</span>, It&apos;s Joseph :)
					</Text>

					<Text fontSize={["md", "md", "md"]} color="gray.200">
						A multidisciplinary digital product designer who codes and writes. I
						thrive in breaking down complex problems into use cases and
						ultimately designing solutions that are a joy to own and use, on
						both mobile and web user interfaces.
					</Text>
					<HStack>
						<Button size="md" colorScheme="teal">
							Recent Work
						</Button>

						<Button size="md" colorScheme="teal">
							Get To Know Me
						</Button>
					</HStack>
				</VStack>

				<VStack width="30%" height="maxContent" alignItems="self-start" {...hidden}>
					<WrapItem
						overflow="hidden"
						lineHeight="0"
						borderRadius="full"
						_hover={{ boxShadow: "dark-xs" }}
					>
						<Image
							src={joseph}
							height={300}
							width={300}
							alt="Joseph Mugo"
						/>
					</WrapItem>
				</VStack>
			</HStack>
		</VStack>
	);
};

export default Header;
