/* eslint-disable linebreak-style */
//const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } =  require('./handler');
//const { getpathLink } = require('./db');
//const pathLink = getpathLink();

const { addPath, redirectPath, deletePath } = require('./handler');

const routes = (pathLink) => [
//   {
//     method: 'OPTIONS',
//     path: '/{any*}',
//     handler: (request, h) => {
//         console.log('optionnih');
//        return h.response()
//       .header('Access-Control-Allow-Origin', '*')
//       .header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//       .header('Access-Control-Allow-Headers', 'Content-Type')
//       .code(200);
//     },
//   },
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
      return 'ini adalah halaman utama home';
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
  }

];

module.exports = routes;