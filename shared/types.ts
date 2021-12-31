import app from "next/app";

export type UriString = string;
export type UniqueString = string;
export type EntityId = Number | UniqueString;

export type Category =
	| "UI/UX DESIGN"
	| "PRODUCT"
	| "CASE STUDY"
	| "SIDEPROJECT";
export type DateIsoString = string;

export type Post = {
	id: EntityId;
	date: DateIsoString;
	category: Category;
	title: string;
	lead: string;
	content: string;
	image: UriString;
	source: UriString;
};

