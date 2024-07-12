module.exports = {
  reactStrictMode: true,
  env: {
    IS_DEV: process.env.IS_DEV == 'true',
    PROJECT_ID: process.env.PROJECT_ID,
    API_URL: process.env.API_URL,
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};
