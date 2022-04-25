export const environment = {
  production: true,
  database: {
    url: process.env.MONGO_URL
  },
  hash: {
    saltround: process.env.SALTORROUNDS
  }
};
