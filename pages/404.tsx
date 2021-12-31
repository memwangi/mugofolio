import { VStack, Text, Heading } from "@chakra-ui/react";

const notFound = () => {
	return (
		<VStack pt={16}>
			<Heading>
                404
            </Heading>
            <Text fontSize="md">
                Oops! Page not found :(
            </Text>
		</VStack>
	);
};

export default notFound