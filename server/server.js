require('dotenv').config();
const app = require("./app");
const { db } = require("./database/config");
const initModel = require('./models/initModel');


db.authenticate()
.then(() => console.log("databse authenticate 😁"))
.catch((err) => console.log(err));

initModel()

db.sync()
  .then(() => console.log("data base Sync 😁"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3203;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
