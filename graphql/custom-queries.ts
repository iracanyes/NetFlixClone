export const getCategoryWithMovies = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
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
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        movies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;