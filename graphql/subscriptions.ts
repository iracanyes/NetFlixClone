/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
      categoryID
      watched {
        items {
          id
          userID
          movieID
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
      categoryID
      watched {
        items {
          id
          userID
          movieID
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
      categoryID
      watched {
        items {
          id
          userID
          movieID
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
        categoryID
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
        categoryID
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
        categoryID
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
          categoryID
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
          categoryID
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
          categoryID
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
        categoryID
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
        categoryID
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
        categoryID
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
