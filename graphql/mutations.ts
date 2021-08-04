/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createSerie = /* GraphQL */ `
  mutation CreateSerie(
    $input: CreateSerieInput!
    $condition: ModelSerieConditionInput
  ) {
    createSerie(input: $input, condition: $condition) {
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
export const updateSerie = /* GraphQL */ `
  mutation UpdateSerie(
    $input: UpdateSerieInput!
    $condition: ModelSerieConditionInput
  ) {
    updateSerie(input: $input, condition: $condition) {
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
export const deleteSerie = /* GraphQL */ `
  mutation DeleteSerie(
    $input: DeleteSerieInput!
    $condition: ModelSerieConditionInput
  ) {
    deleteSerie(input: $input, condition: $condition) {
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
export const createMovieCategory = /* GraphQL */ `
  mutation CreateMovieCategory(
    $input: CreateMovieCategoryInput!
    $condition: ModelMovieCategoryConditionInput
  ) {
    createMovieCategory(input: $input, condition: $condition) {
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
export const updateMovieCategory = /* GraphQL */ `
  mutation UpdateMovieCategory(
    $input: UpdateMovieCategoryInput!
    $condition: ModelMovieCategoryConditionInput
  ) {
    updateMovieCategory(input: $input, condition: $condition) {
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
export const deleteMovieCategory = /* GraphQL */ `
  mutation DeleteMovieCategory(
    $input: DeleteMovieCategoryInput!
    $condition: ModelMovieCategoryConditionInput
  ) {
    deleteMovieCategory(input: $input, condition: $condition) {
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
export const createSerieCategory = /* GraphQL */ `
  mutation CreateSerieCategory(
    $input: CreateSerieCategoryInput!
    $condition: ModelSerieCategoryConditionInput
  ) {
    createSerieCategory(input: $input, condition: $condition) {
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
export const updateSerieCategory = /* GraphQL */ `
  mutation UpdateSerieCategory(
    $input: UpdateSerieCategoryInput!
    $condition: ModelSerieCategoryConditionInput
  ) {
    updateSerieCategory(input: $input, condition: $condition) {
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
export const deleteSerieCategory = /* GraphQL */ `
  mutation DeleteSerieCategory(
    $input: DeleteSerieCategoryInput!
    $condition: ModelSerieCategoryConditionInput
  ) {
    deleteSerieCategory(input: $input, condition: $condition) {
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
export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
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
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
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
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
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
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
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
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
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
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createWatched = /* GraphQL */ `
  mutation CreateWatched(
    $input: CreateWatchedInput!
    $condition: ModelWatchedConditionInput
  ) {
    createWatched(input: $input, condition: $condition) {
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
export const updateWatched = /* GraphQL */ `
  mutation UpdateWatched(
    $input: UpdateWatchedInput!
    $condition: ModelWatchedConditionInput
  ) {
    updateWatched(input: $input, condition: $condition) {
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
export const deleteWatched = /* GraphQL */ `
  mutation DeleteWatched(
    $input: DeleteWatchedInput!
    $condition: ModelWatchedConditionInput
  ) {
    deleteWatched(input: $input, condition: $condition) {
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
