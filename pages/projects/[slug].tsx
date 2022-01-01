import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ErrorPage from "next/error";
import { Post } from "../../components/post";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { getClient, sanityClient } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { usePreviewSubscription } from "../../lib/sanity";
import { get } from "https";

const ReactDOM = require("react-dom");
const BlockContent = require("@sanity/block-content-to-react");

const postQuery = groq`*[_type == "post" && slug.current ==$slug][0] {
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
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();

	if (!router.isFallback && !data.post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return <Post project={data?.post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug = " " } = context.params as ParsedUrlQuery;
	const post = await getClient().fetch(postQuery, { slug });

	return {
		props: {
			data: { post },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getClient().fetch(
		`*[_type == "post" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug: any) => ({ params: { slug } })),
		fallback: true,
	};
};

export default Project;
