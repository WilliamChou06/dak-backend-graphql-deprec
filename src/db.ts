const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'databaseThis66',
    database: 'dak',
  },
});

knex
  .raw('select 1+1 as result')
  // eslint-disable-next-line no-console
  .then(() => console.log('PostgreSQL DB connected!'));

export default knex;
