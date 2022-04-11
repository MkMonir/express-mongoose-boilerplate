const dotenv = require('dotenv');
const Database = require('./utils/database');

// HANDLE UNCAUGHT EXCEPTION
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXPECTION! shutting down💥💥');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// DATABASE CONNECTION
const mongodbConnection = new Database();

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

// HANDLE UNCAUGHT REJECTION
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! shutting down💥💥');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
