const express = require('express');
//const Posting = require('../models/posting');
const postingRouter = express.Router();
const {
  getAllPostings,
  addPosting,
  getPostingsByLocation,
  deletePosting,
  updatePosting,
} = require("../controllers/controllers");

postingRouter.get("/", getAllPostings);

postingRouter.get("/:location", getPostingsByLocation);

postingRouter.post("/", addPosting);

postingRouter.put("/updateposting/:id", updatePosting);

postingRouter.delete("/:id", deletePosting);

module.exports =postingRouter;