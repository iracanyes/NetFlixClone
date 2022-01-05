// Movie Action Buttons component props

import {PosterListDataType} from "../../types";
import {Dispatch, RefObject, SetStateAction} from "react";

export interface IUser {
  id: string;
  __typename?: string;
  username: string;
  name: string;
  email: string;
  
  watched?: { items: [IWatched]}
}

export interface IWatched {
	id: string;
	__typename: string;
	userID?: string;
	user?: IUser;
	movieID?: string;
	movie?: IMovie;
}

export interface ICategory {
  id: string;
	__typename: string;
  title: string;
  movies: {
  	items: [IMovie]
	}
}

export interface IMovieCategory{
	id: string;
	__typename: 'MovieCategory';
	categoryID: string;
	movieID: string;
	category: ICategory
	movie: IMovie
	
}

export interface IMovie {
	id: string;
	__typename: 'Movie';
	title: string;
	poster: string;
	trailer: string;
	video: string;
	duration: string;
	year: string;
	numberOfSeasons: string;
	plot: string;
	cast: string;
	creator: string;
	seasons?: {
		items: [ISeason]
	}
	watched?: {
		items: [IWatched]
	}
	movieCategories?: {
		items: [IMovieCategory]
	};
}

export interface ISeason {
	id: string;
	__typename: 'Season';
	name: string;
	movieID: string;
	movie: IMovie;
	episodes: [IEpisode]
}

export interface IEpisode {
	id: string;
	__typename: 'Episode';
	title: string;
	poster: string;
	duration: string;
	plot: string;
	video: string;
	seasonID: string;
	season: ISeason
}


export interface IMovieActionButtonsProps {
	movie: IMovie|null
}



export interface IPosterListProps {
	category: ICategory;
	medias: PosterListDataType
}

export interface IPosterItemProps {
	item: IMovieCategory|IEpisode
	category?: ICategory
	scrollTop?: () => void
}

export interface IResumeModal{
	item: IMovieCategory|IMovie|null;
	modalVisibility: boolean
	setModalVisibility: (modalVisibility: boolean) => void
	scrollTop: (() => void)|undefined
}

export interface IGetMoviesByCategory {
	category: ICategory|undefined
}

export interface ISimilarMovieProps {
	movie: IMovie
	categoryID: string;
	scrollTop: () => void
}

export interface IVideoPlayerProps {
	data: IMovie|IEpisode
	videoType: string;
	playButtonPressed: boolean,
	setPlayButtonPressed: Dispatch<SetStateAction<boolean>>
}