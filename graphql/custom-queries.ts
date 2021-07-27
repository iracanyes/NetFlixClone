export const listCategories = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  query ListMovieCategorys(
    $filter: ModelMovieCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        __typename
        movie {
          id
          __typename
          title
          poster
          creator
          trailer
        }
      }
      nextToken
    }
  }
`;