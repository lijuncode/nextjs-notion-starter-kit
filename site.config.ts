import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '10e61875528643878a52d96fe70a0a1a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'One Player',
  domain: 'oneplayer.club',
  author: 'One Player',

  // open graph metadata (optional)
  description: 'A simple and easy-to-use local offline music player',

  // social usernames (optional)
  twitter: 'likumb1',
//   github: '',
//   linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '使用指南',
      pageId: '382d6a934de84098b6d3ed81c6fe7f1a'
    },
    {
      title: '内购优惠',
      pageId: '1556aacfee96461ebe293cda474e95aa'
    },
    {
      title: 'About',
      pageId: 'a3b4c691e7884d57b5aa3d12b80f7bf6'
    },
    {
      title: 'Contact',
      pageId: '61e073fcf8d24f71b4d2289f1a13178d'
    },
    
  ]
})
