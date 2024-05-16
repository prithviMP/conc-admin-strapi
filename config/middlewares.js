module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::body',
    config: {
      formLimit: '200mb', // Adjust form body size
      jsonLimit: '200mb', // Adjust JSON body size
      textLimit: '200mb', // Adjust text body size
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024 // Set file size limit to 2GB
      }
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::poweredBy',
  'strapi::query',
];
