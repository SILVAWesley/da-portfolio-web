export interface IImage {
	id: number;
	src: string;
	alt: string;
}

export interface ArtCardProps {
	images: IImage[];
}
