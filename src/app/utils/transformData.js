export function transformData(apiResponse) {
  const homepage = apiResponse.pages.nodes[0].homepage;

  return {
    homepageBanners: homepage.banners.map(banner => ({
      sourceUrl: banner.bannerImage.node.sourceUrl,
      title: banner.bannersTitle,
      description: banner.bannerDescription,
      button: {
        title: banner.bannerButton.title,
        url: banner.bannerButton.url,
        target: banner.bannerButton.target
      }
    })),
    homeAbout: {
      title: homepage.homeAboutTitle,
      subtitle: homepage.homeAboutSubtitle,
      button: {
        title: homepage.homeAboutButton.title,
        url: homepage.homeAboutButton.url,
        target: homepage.homeAboutButton.target
      },
      videoImageUrl: homepage.homeAboutVideoImage.node.sourceUrl,
      videoUrl: homepage.homeAboutVideoUrl,
      description: homepage.homeAboutDescription
    },
    homeCategory: {
      title: homepage.homeCategoryTitle,
      subtitle: homepage.homeCategorySubtitle
    },
    homeServices: {
      title: homepage.homeServicesTitle,
      subtitle: homepage.homeServicesSubtitle
    },
    homeColours: {
      title: homepage.homeColoursTitle,
      subtitle: homepage.homeColoursSubtitle,
      button: {
        title: homepage.homeColoursButton.title,
        url: homepage.homeColoursButton.url,
        target: homepage.homeColoursButton.target
      }
    },
    homeJoin: {
      backgroundImageUrl: homepage.homeJoinBackgroundImage.node.sourceUrl,
      title: homepage.homeJoinTitle,
      subtitle: homepage.homeJoinSubtitle,
      button: {
        title: homepage.homeJoinButton.title,
        url: homepage.homeJoinButton.url,
        target: homepage.homeJoinButton.target
      },
      description: homepage.homeJoinDescription
    },
    blog: {
      title: homepage.blogTitle,
      subtitle: homepage.blogSubtitle
    },
    categories: homepage.categories.map(category => ({
      link: category.link,
      title: category.title,
      imageUrl: category.image.node.sourceUrl
    })),
    colourCategories: apiResponse.allColourCategory.nodes.map(category => ({
      name: category.name,
      colours: category.colours.nodes.map(color => ({
        title: color.title,
        slug: color.slug,
        selectColor: color.colourInfo.selectColor,
        colourRgb: color.colourInfo.colourRgb
      }))
    })),
    blogs: apiResponse.blogs.nodes.map(blog => ({
      sourceUrl: blog.featuredImage.node.sourceUrl,
      slug: blog.slug,
      title: blog.title,
      date: blog.date
    })),
    seo: {
      canonical: apiResponse.pages.nodes[0].seo.canonical,
      metaKeywords: apiResponse.pages.nodes[0].seo.metaKeywords,
      metaDesc: apiResponse.pages.nodes[0].seo.metaDesc,
      title: apiResponse.pages.nodes[0].seo.title,
      opengraphType: apiResponse.pages.nodes[0].seo.opengraphType,
      opengraphSiteName: apiResponse.pages.nodes[0].seo.opengraphSiteName,
      opengraphTitle: apiResponse.pages.nodes[0].seo.opengraphTitle,
      opengraphDescription: apiResponse.pages.nodes[0].seo.opengraphDescription,
      opengraphUrl: apiResponse.pages.nodes[0].seo.opengraphUrl,
      schema: apiResponse.pages.nodes[0].seo.schema.raw,
      opengraphImage: {
        mediaItemUrl: apiResponse.pages.nodes[0].seo.opengraphImage.mediaItemUrl
      }
    }
  };
}
