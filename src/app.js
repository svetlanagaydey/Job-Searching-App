const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/posting_routes');
const cors = require("cors");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "../client/build");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));
app.use(userRouter);

app.use("*", (req ,res) =>{
  res.send("didnt find route that match you request")
});

app.listen(port, () => {
  console.log('Server is up on port ' + port)
});