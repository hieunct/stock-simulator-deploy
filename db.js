const MongoClient = require('mongodb').MongoClient;
const url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/StockApp"
const client = new MongoClient(url, { useNewUrlParser: true });

let db;
async function connect() {
  try {
    await client.connect();
    db = client.db('StockApp');
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error(error);
  }
}

// exports.getDb = getDb;
exports.connect = connect;