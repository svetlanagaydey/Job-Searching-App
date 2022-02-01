const Posting = require("../models/posting");
//const { validateObjectId, validateNumber } = require("./utils");

const addPosting = async (req, res) => {
  try {
    const { company, email, phone } = req.body;
    const posting = new Posting({ company: company, email:email || 0, phone:phone || 0});
    await posting.save();
    res.status(200).send({ message: "Added Successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllPostings = async (req, res) => {
  try {
    const allPostings = await Posting.find();
    res.status(200).send({ postings: allPostings });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getPostingsByLocation = async (req, res) => {
  try {
    const city = req.params.location;
    //validateObjectId(id);
    const postings = await User.find({location: location});
    if (!postings) {
      throw new Error(`It is no postings in ${location}`);
    }
    res.status(200).send({ postings: postings });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deletePosting = async (req, res) => {
  try {
    const id = req.params.id;
    validateObjectId(id);
    const { deletedCount } = await Posting.deleteOne({ _id: id });
    if (deletedCount === 0) throw new Error(`Posting ${id} does not exist`);
    res.status(200).send({ message: `Posting ${id} deleted` });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const updatePosting = async (req, res) => {
  const id = req.params.id;
  const email = req.body.email;
  const phone = req.body.phone;
  try {
    validateObjectId(id);
   // validateNumber(creditAmount);
    const posting = await User.findById(id);
    posting.email = email;
    posting.phone = phone;
    const updatedPosting = await posting.save();
    res.status(200).send({ message: `Posting updated successfuly` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllPostings, addPosting, getPostingsByLocation, deletePosting, updatePosting };