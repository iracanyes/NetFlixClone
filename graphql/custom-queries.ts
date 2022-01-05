export const customGetMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
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

export const customListCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const customListCategoryMovies = /* GraphQL */ `
  query ListMovieCategories(
    $filter: ModelMovieCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        __typename
        categoryID
        movieID
        movie {
          id
          __typename
          title
          poster
          creator
          trailer
          plot
          cast
          creator
          year
          video
        }
      }
      nextToken
    }
  }
`;

export const customListMovieCategories = /* GraphQL */ `
  query ListMovieCategories(
    $filter: ModelMovieCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        __typename
        movieID
        category {
          id
          title
        }
      }
      nextToken
    }
  }
`;