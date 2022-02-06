const express = require('express');
//const Posting = require('../models/posting');
const postingRouter = express.Router();
const {
  getAllPostings,
  addPosting,
  getByLocation,
  getByProfession,
  deletePosting,
  updatePosting,
} = require("../controllers/controllers");

postingRouter.get("/all", getAllPostings);

postingRouter.post("/location", getByLocation);

postingRouter.get("/profession", getByProfession);

postingRouter.post("/", addPosting);

postingRouter.put("/update/:id", updatePosting);

postingRouter.delete("/:id", deletePosting);

module.exports =postingRouter;