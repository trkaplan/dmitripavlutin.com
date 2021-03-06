module.exports = {
  siteMetadata: require('./gatsby/config/site-metadata'),
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              tight: true,
              fromHeading: 1,
            },
          },
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
              quality: 90,
              withWebp: {
                quality: 90,
              },
              wrapperStyle({ aspectRatio }) {
                if (aspectRatio <= 0.8) {
                  return 'max-width: 560px !important;';
                }
                return '';
              },
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-code-repls',
            options: {
              defaultText: 'Click here',
              dependencies: [],
              directory: `${__dirname}/content/posts/`,
              externals: [],
              html: '',
              target: '_blank',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-plugin-typescript',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'static',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-66648045-1',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'rainsoft',
      },
    },
    'gatsby-plugin-webpack-size',
    require('./gatsby/config/gatsby-plugin-sass'),
    'gatsby-plugin-minify-classnames',
    require('./gatsby/config/gatsby-plugin-feed'),
    'gatsby-plugin-netlify-cache',
  ],
};
