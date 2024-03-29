export interface GenreResponseProps {
	id: number;
	name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
	title: string;
}

export interface MovieProps {
	Title: string;
	Poster: string;
	Ratings: Array<{
		Source: string;
		Value: string;
	}>;
	Runtime: string;
}
