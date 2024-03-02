import { gql } from "graphql-request";

const commonQueries = `edges {
      node {
        id
        language {
          ... on Language {
            id
            name
            slug
          }
        }
        name
        tags
        target {
          ... on Target {
            id
            name
            slug
          }
        }
        technology {
          ... on Technology {
            id
            name
            slug
            lightColor
            darkColor
          }
        }
        url
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount`;

export const allBlogFilterQuery = (
  langSelected,
  audienceSelected,
  tagSelected
) => {
  let filtersSelected = `${
    langSelected
      ? `language: { findOne: { Language: { name: { contains: ${langSelected} } } } }`
      : ""
  },
  ${
    audienceSelected
      ? `target: { findOne: { Target: { name: { contains: ${audienceSelected} } } } }`
      : ""
  }, 
  ${
    tagSelected
      ? `technology: { findOne: { Technology: { name: { contains: ${tagSelected} } } } }`
      : ""
  }`;

  return gql`
  query allBlog {
    allBlog(
      where: {
          ${filtersSelected}
      }
    ) {
        ${commonQueries}
    }
  }
`;
};
