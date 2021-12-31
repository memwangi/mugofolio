import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ErrorPage from 'next/error'
import {Post} from "../../components/post";
import { ParsedUrlQuery } from "querystring";
import {useRouter} from 'next/router'
import { getClient } from "../../lib/sanity.server";
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
	data, preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router =  useRouter()

	const {data: post} = usePreviewSubscription(postQuery, {
		params: {slug: data.post?.slug},
		initialData: data.post,
		enabled: preview && data.post?.slug,
	  })

	if(!router.isFallback && !data.post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	
	return (
		<Post project={post}/>
	);
};



export const getStaticProps: GetStaticProps = async (context) => {
	const preview = context.preview
	const { slug = " " } = context.params as ParsedUrlQuery;
	const post = await getClient(preview).fetch(postQuery, { slug });

	

	return {
		props: {
			preview,
			data: {post},
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getClient().fetch(
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

export default Project;
