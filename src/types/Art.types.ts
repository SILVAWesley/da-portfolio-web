export interface IArt {
	id: number;
	attributes: {
		createdAt: Date;
		updatedAt: Date;
		publishedAt: Date;
		images: { data: IImage[] };
	};
}

export interface IImage {
	id: number;
	attributes: {
		width: number;
		height: number;
		size: number;
		ext: string;
		mime: string;
		url: string;
		formats: {
			thumbnail: IImageFormat;
			large: IImageFormat;
			small: IImageFormat;
			medium: IImageFormat;
		};
	};
}

export interface IImageFormat {
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	url: string;
}
