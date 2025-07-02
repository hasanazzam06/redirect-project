const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let pathLink = null;

async function connectDB() {
  await client.connect();
  const db = client.db('redirectProject');
  pathLink = db.collection('pathLink');
}

function getpathLink() {
  return pathLink;
}

module.exports = { connectDB, getpathLink };
