const { Pool } = require('pg');

const pool = new Pool({
  user: 'maintenance',
  host: 'localhost',
  database: 'maintenancedb',
  password: 'maintenance',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};