import { Stack, VStack, Box, Container, HStack, Wrap } from "@chakra-ui/layout";
import { Text, Heading, Image, Button, Link, Icon } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithubSquare, FaTwitter,  } from "react-icons/fa";

export const Footer = () => {
	return (
		<VStack
			p={8}
			spacing={4}
			bg="gray.100"
			height="maxContent"
			alignContent="center"
			width="full"
		>
			<Stack bg="gray.200" px={[4, 8, 8]} py={[4,4,4]} boxShadow="baseline" borderRadius="md" alignContent="center" justifyItems="center">
				<Text alignSelf="center" fontSize="md" color="black.100" fontWeight="medium">Want to say hi?👇</Text>
				<HStack>
					<Icon as={MdEmail} w={6} h={6} color='gray.400' />
					<Link
						href="mailto:mugojoseph007@gmail.com"
						isExternal
						fontWeight="semibold"
						color="blue.500"
						size="xl"
					>
						mugojoseph007@gmail.com
					</Link>
				</HStack>
			</Stack>

			<Wrap spacing={4} py={4} justify="center" alignContent="center">
				<HStack alignContent="center">
					<Icon as={FaLinkedin} w={6} h={6} color='gray.400' />
					<Link
						href="https://www.linkedin.com/in/memwangi/"
						isExternal
						fontWeight="semibold"
						color="blue.500"
						size="xl"
					>
						@memwangi
					</Link>
				</HStack>

				<HStack>
				<Icon as={FaGithubSquare} w={6} h={6} color='gray.400' />
					<Link
						href="https://github.com/memwangi/"
						isExternal
						fontWeight="semibold"
						color="blue.500"
						size="xl"
					>
						github.com/memwangi
					</Link>
				</HStack>

				<HStack>
				<Icon as={FaTwitter} w={6} h={6} color='gray.400' />
					<Link
						href="https://twitter.com/anothermugo/"
						isExternal
						fontWeight="semibold"
						color="blue.500"
						size="xl"
					>
						twitter.com/anothermugo
					</Link>
				</HStack>
				<Text fontSize="md" color="gray.500" fontWeight="medium">Built by Mugo :)</Text>
			</Wrap>

			
		</VStack>
	);
};
