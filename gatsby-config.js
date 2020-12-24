module.exports = {
  siteMetadata: {
    title: `Suhani constructions`,
    name: `Suhani constructions`,
    siteUrl: `https://novela.narative.co`,
    description: `No.1 Construction contractor in Thane district, honest, quality construction`,
    hero: {
      heading: `We build it to last a lifetime. Welcome to Suhani constructions.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `#`,
      },
      
      {
        name: `instagram`,
        url: `#`,
      },
      {
        name: `linkedin`,
        url: `#`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suhani constructions`,
        short_name: `Suhani`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
