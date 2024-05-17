import pgPromise from 'pg-promise';
import 'dotenv/config';

const pgp = pgPromise();

console.log(process.env.DB_URL); 

const db = pgp(process.env.DB_URL);

export default db;
