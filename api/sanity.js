import {
	createClient,
	createPreviewSubscriptionHook,
	createImageUrlBuilder,
	createPortableTextComponent,
} from "next-sanity";

const config = {
	projectId: "27t8yf6t",
	dataset: "production",
	apiVersion: "2021-11-29",
	useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
	...config,
	serializers: {},
});
