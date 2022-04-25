export const environment = {
  production: false,
  host: '0.0.0.0',
  database: {
    url: process.env.MONGO_URL
  },
  hash: {
    saltorround: process.env.SALTORROUNDS
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};
