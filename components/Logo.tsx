import { Box, Img } from "@chakra-ui/react";
import Image from "next/image";
import Vectormugo from "../public/Vectormugo.svg"
import Link from "next/link";

export default function Logo(props: any) {
	return (
		<Link href="/" passHref>
			<Box p={0} {...props}>
				<Image src={Vectormugo} alt="tuko" />
			</Box>
		</Link>
	);
}
