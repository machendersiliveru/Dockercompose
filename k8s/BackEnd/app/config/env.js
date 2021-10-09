const env = {
  database: 'loizenaidb',
  username: 'postgres',
  password: 'password123',
  host: 'localhost',
  dialect: 'postgres',
  PSQL_HOST: 'database',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;