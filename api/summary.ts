import fetch from "node-fetch";
import { PortableText, sanityClient, urlFor } from "./sanity";
import { Post, Category } from "../shared/types";


// Decouple this from the individual posts page.
const groqAllPosts = `*[_type == "post" && defined(slug.current)] {
        "params": {
            "slug": slug.current
        }
    }`;

export async function fetchPosts(): Promise<any> {
	const paths = await sanityClient.fetch(groqAllPosts);
	return paths;
}


