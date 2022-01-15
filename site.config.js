module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '919c6b7b02bf45bb80e4714e27143848',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Aman Sharma',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'amanin.tech',
  author: 'Aman Sharma',

  // Use custom font family (leave empty to use default font)
  fontFamily: 'Work Sans',

  // open graph metadata (optional)
  description: 'Personal Website for ',
  socialImageTitle: 'amanin.tech',
  socialImageSubtitle: 'Hey from Aman! 👋',

  // social usernames (optional)
  twitter: 'amanintech',
  github: 'amanintech',
  linkedin: 'amanintech',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50b08723-06fe-4b85-b629-dcd79ad2f003%2F1638644413393.jpg?table=block&id=919c6b7b-02bf-45bb-80e4-714e27143848&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  //utterancesGitHubRepo: 'wzulfikar/wzulfikar.com',
  //utterancesGitHubLabel: 'blog-comment',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  showGithubRibbon: false,
  showPageAsideSocials: false
}
