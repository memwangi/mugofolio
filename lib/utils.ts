// Card overview for the homepage
export interface ProjectPreview {
	projectID: string;
	title: string;
	slug: string;
	imageUrl: string;
	description?: string;
}

export interface Project extends ProjectPreview {
	body: string;
	subtitle: string;
}
