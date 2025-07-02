/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { connectDB, getpathLink } = require('./db');

const init = async () => {
  await connectDB();
  const pathLink = getpathLink();

  const server = Hapi.server({
    port:5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
        additionalHeaders: ["accept", "authorization", "content-type"],
      },
    },
  });
  
  server.route(routes(pathLink));

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();