require('dotenv').config();
const app = require('./app');

const mysql = require('./db/mysql');

mysql
  .sync()
  .then(() => {
    console.log('info:', 'Mysql Connection established successfully.');
  })
  .catch((err) => {
    console.log('error', `Unable to establish connection: ${err}`);
  });

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
