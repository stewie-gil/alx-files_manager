import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    this.dbName = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${dbHost}:${dbPort}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });

    this.client.connect()
      // .then(() => console.log('DB connection established'))
      .catch((err) => console.error('Error connecting to DB:', err));
  }

  isAlive() {
    return !!this.client && this.client.isConnected();
  }

  async nbUsers() {
    const usersCollection = this.client.db(this.dbName).collection('users');
    const count = await usersCollection.countDocuments();
    return count;
  }

  async nbFiles() {
    const filesCollection = this.client.db(this.dbName).collection('files');
    const count = await filesCollection.countDocuments();
    return count;
  }
}
const dbClient = new DBClient();
export default dbClient;
