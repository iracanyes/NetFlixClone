/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!, $title: String!) {
    getCategory(id: $id, title: $title) {
      id
      title
      categoryMovies {
        items {
          id
          categoryID
          movieID
          createdAt
          updatedAt
        }
        nextToken
      }
      categorySeries {
        items {
          id
          categoryID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $id: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        categoryMovies {
          nextToken
        }
        categorySeries {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!, $title: String!) {
    getMovie(id: $id, title: $title) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      trailer
      video
      movieCategories {
        items {
          id
          categoryID
          movieID
          createdAt
          updatedAt
        }
        nextToken
      }
      watched {
        items {
          id
          userID
          movieID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      seasons {
        items {
          id
          name
          movieID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $id: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMovies(
      id: $id
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        movieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSerie = /* GraphQL */ `
  query GetSerie($id: ID!, $title: String!) {
    getSerie(id: $id, title: $title) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      trailer
      video
      serieCategories {
        items {
          id
          categoryID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      watched {
        items {
          id
          userID
          movieID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      seasons {
        items {
          id
          name
          movieID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSeries = /* GraphQL */ `
  query ListSeries(
    $id: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelSerieFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSeries(
      id: $id
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        serieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMovieCategory = /* GraphQL */ `
  query GetMovieCategory($id: ID!) {
    getMovieCategory(id: $id) {
      id
      categoryID
      movieID
      category {
        id
        title
        categoryMovies {
          nextToken
        }
        categorySeries {
          nextToken
        }
        createdAt
        updatedAt
      }
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        movieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMovieCategories = /* GraphQL */ `
  query ListMovieCategories(
    $id: ID
    $filter: ModelMovieCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMovieCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        categoryID
        movieID
        category {
          id
          title
          createdAt
          updatedAt
        }
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSerieCategory = /* GraphQL */ `
  query GetSerieCategory($id: ID!) {
    getSerieCategory(id: $id) {
      id
      categoryID
      serieID
      category {
        id
        title
        categoryMovies {
          nextToken
        }
        categorySeries {
          nextToken
        }
        createdAt
        updatedAt
      }
      serie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        serieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSerieCategories = /* GraphQL */ `
  query ListSerieCategories(
    $id: ID
    $filter: ModelSerieCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSerieCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        categoryID
        serieID
        category {
          id
          title
          createdAt
          updatedAt
        }
        serie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!, $name: String!) {
    getSeason(id: $id, name: $name) {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        movieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      serieID
      serie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        serieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSeasons = /* GraphQL */ `
  query ListSeasons(
    $id: ID
    $name: ModelStringKeyConditionInput
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSeasons(
      id: $id
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        serieID
        serie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        episodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEpisode = /* GraphQL */ `
  query GetEpisode($id: ID!, $title: String!) {
    getEpisode(id: $id, title: $title) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        serieID
        serie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        episodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEpisodes = /* GraphQL */ `
  query ListEpisodes(
    $id: ID
    $title: ModelStringKeyConditionInput
    $filter: ModelEpisodeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEpisodes(
      id: $id
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        poster
        duration
        plot
        video
        seasonID
        season {
          id
          name
          movieID
          serieID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!, $email: String!) {
    getUser(id: $id, email: $email) {
      id
      username
      name
      email
      accountType
      status
      image
      watched {
        items {
          id
          userID
          movieID
          serieID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $email: ModelStringKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        name
        email
        accountType
        status
        image
        watched {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWatched = /* GraphQL */ `
  query GetWatched($id: ID!) {
    getWatched(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        accountType
        status
        image
        watched {
          nextToken
        }
        createdAt
        updatedAt
      }
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        movieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      serieID
      serie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        trailer
        video
        serieCategories {
          nextToken
        }
        watched {
          nextToken
        }
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWatcheds = /* GraphQL */ `
  query ListWatcheds(
    $id: ID
    $filter: ModelWatchedFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWatcheds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userID
        user {
          id
          username
          name
          email
          accountType
          status
          image
          createdAt
          updatedAt
        }
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        serieID
        serie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          trailer
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
