// const mssql = require("mssql");

// const config = {
//   server: "localhost",
//   user: "MSI",
//   password: "4254",
//   database: "micro_check",
//   options: {
//     trustServerCertificate: true,
//   },
// };

// const pool = new mssql.ConnectionPool(config);

// try {
//   const connectedPool = pool.connect();
//   console.log("DB connection succefull !!");
// } catch (err) {
//   console.log("errror when creating pool connection");
// }

// module.exports = pool;

const mssql = require("mssql");

const config = {
  server: "MSI",
  user: "tharaka",
  password: "4254",
  database: "micro_check",
  //   options: {
  //     trustServerCertificate: true,
  //   },
};

const pool = new mssql.ConnectionPool(config);

async function connectToDatabase() {
  try {
    await pool.connect();
    console.log("DB connection successful!!");
  } catch (err) {
    console.error("Error when creating pool connection", err);
  }
}

connectToDatabase();

module.exports = pool;
