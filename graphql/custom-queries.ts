export const listCategories = /* GraphQL */ `
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

export const listCategoryMovies = /* GraphQL */ `
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

export const listMovieCategories = /* GraphQL */ `
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