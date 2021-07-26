// Movie Action Buttons component props

export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  
  watched?: { items: [IWatched]}
}

export interface IWatched {
	id: string;
	userID?: string;
	user?: IUser;
	movieID?: string;
	movie?: IMovie;
}

export interface ICategory {
  id: string;
  title: string;
  movies: {
  	items: [IMovie]
	}
}

export interface IMovie {
	id: string;
	title: string;
	poster: string;
	year: number;
	numberOfSeasons: number;
	plot: string;
	cast: string;
	creator: string;
	categoryID: string;
	seasons?: {
		items: [ISeason]
	}
	watched: {
		items: [IWatched]
	}
}

export interface ISeason {
	id: string;
	name: string;
	movieID: string;
	movie: IMovie;
	episodes: [IEpisode]
}

export interface IEpisode {
	id: string;
	title: string;
	poster: string;
	duration: string;
	plot: string;
	video: string;
	seasonID: string;
	season: ISeason
}

export interface IUser {
	id: string;
	username: string;
	name: string;
	email: string;
	image: string;
}

export interface IMovieActionButtonsProps {
    
}

export interface IPosterListProps {
	title: string;
	medias: IMovie[]|IEpisode[]|null;
}

export interface IPosterItemProps {
	item: IMovie|IEpisode
}

export interface IGetMoviesByCategory {
	category: ICategory|undefined
}