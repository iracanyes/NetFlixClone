/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateSerie = /* GraphQL */ `
  subscription OnCreateSerie {
    onCreateSerie {
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
export const onUpdateSerie = /* GraphQL */ `
  subscription OnUpdateSerie {
    onUpdateSerie {
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
export const onDeleteSerie = /* GraphQL */ `
  subscription OnDeleteSerie {
    onDeleteSerie {
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
export const onCreateMovieCategory = /* GraphQL */ `
  subscription OnCreateMovieCategory {
    onCreateMovieCategory {
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
export const onUpdateMovieCategory = /* GraphQL */ `
  subscription OnUpdateMovieCategory {
    onUpdateMovieCategory {
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
export const onDeleteMovieCategory = /* GraphQL */ `
  subscription OnDeleteMovieCategory {
    onDeleteMovieCategory {
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
export const onCreateSerieCategory = /* GraphQL */ `
  subscription OnCreateSerieCategory {
    onCreateSerieCategory {
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
export const onUpdateSerieCategory = /* GraphQL */ `
  subscription OnUpdateSerieCategory {
    onUpdateSerieCategory {
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
export const onDeleteSerieCategory = /* GraphQL */ `
  subscription OnDeleteSerieCategory {
    onDeleteSerieCategory {
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
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateWatched = /* GraphQL */ `
  subscription OnCreateWatched {
    onCreateWatched {
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
export const onUpdateWatched = /* GraphQL */ `
  subscription OnUpdateWatched {
    onUpdateWatched {
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
export const onDeleteWatched = /* GraphQL */ `
  subscription OnDeleteWatched {
    onDeleteWatched {
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
