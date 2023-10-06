const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'files_manager';

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to Mongodb:', err);
    return;
  }

  console.log('Connected to MongoDB server');
  // select the database
  const db = client.db(dbName);
  const collection = db.collection('users');

  const newDocument = {
    name: 'Jane Doe',
    age: 33,
    email: 'johndoe@example.com',
  };

  try {
    const result = await collection.insertOne(newDocument);
    console.log(`Inserted ${result.insertedCount} document(s)`);
  } finally {
    client.close();
  }
});
