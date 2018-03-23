import { Client } from 'pg';
// import { Pool } from 'pg';

const pgConfig = {
  user:     process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};

// console.log(pgConfig);

const dbClient = new Client(pgConfig);

export const greeting = async () => {

  await dbClient.connect();

  const res = await dbClient.query('SELECT $1::text as message', ['Hello world!']);

  const msgFromDb = res.rows[0].message; // Hello world!

  await dbClient.end();

  return msgFromDb;
}
