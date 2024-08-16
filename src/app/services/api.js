

import axios from 'axios';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const fetchGraphQLData = async (query) => {
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchHomePageData = async () => {
  const HOME_PAGE_QUERY = `
    {
      pages(where: {name: "Homepage"}) {
        nodes {
          homepage {
            banners {
              bannerImage {
                node {
                  sourceUrl
                }
              }
              bannersTitle
              bannerDescription
              bannerButton {
                title
                url
                target
              }
            }
            homeAboutTitle
            homeAboutSubtitle
            homeAboutButton {
              target
              title
              url
            }
            homeAboutVideoImage {
              node {
                sourceUrl
              }
            }
            homeAboutVideoUrl
            homeAboutDescription
            homeCategoryTitle
            homeCategorySubtitle
            homeServicesTitle
            homeServicesSubtitle
            homeColoursTitle
            homeColoursSubtitle
            homeColoursButton {
              target
              title
              url
            }
            homeJoinBackgroundImage {
              node {
                sourceUrl
              }
            }
            homeJoinTitle
            homeJoinSubtitle
            homeJoinButton {
              target
              title
              url
            }
            homeJoinDescription
            blogTitle
            blogSubtitle
            categories {
              link
              title
              image {
                node {
                  sourceUrl
                }
              }
            }
          }
          seo {
            canonical
            metaKeywords
            metaDesc
            title
            opengraphType
            opengraphSiteName
            opengraphTitle
            opengraphDescription
            opengraphUrl
            schema {
              raw
            }
            opengraphImage {
              mediaItemUrl
            }
          }
        }
      }
      allColourCategory(where: {slug: "popular"}) {
        nodes {
          name
          colours {
            nodes {
              title
              slug
              colourInfo {
                selectColor
                colourRgb
              }
            }
          }
        }
      }
      blogs {
        nodes {
          featuredImage {
            node {
              sourceUrl
              slug
            }
          }
          slug
          title
          date
        }
      }
    }
  `;

  return await fetchGraphQLData(HOME_PAGE_QUERY);
};
