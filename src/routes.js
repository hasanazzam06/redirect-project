/* eslint-disable linebreak-style */
//const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } =  require('./handler');
//const { getpathLink } = require('./db');
//const pathLink = getpathLink();

const { addPath, redirectPath, deletePath } = require('./handler');

const routes = (pathLink) => [
    {
  method: 'GET',
  path: '/frontEnd/{param*}',
  handler: {
    directory: {
      path: 'frontEnd',
    },
  },
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log('home di bos');
      return h.redirect('/home');
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: addPath(pathLink),
  },
  {
    method: 'GET',
    path: '/home',
    handler: (request, h) => {
      console.log('home di bos');
      return h.file('./frontEnd/main.html');
    },
  },
  {
    method: 'GET',
    path: '/{target}',
    handler: redirectPath(pathLink),
  },
  {
    method: 'DELETE',
    path: '/',
    handler: deletePath(pathLink),
  },


];

module.exports = routes;