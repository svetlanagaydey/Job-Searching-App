const Posting = require("../models/posting");
const { validateObjectId, validateNumber } = require("./utils");

const addPosting = async (req, res) => {
  try {
    const {
      company,
      email,
      phone,
      details } = req.body;
      
    const posting = new Posting(
      {
        company: company,
        email:email,
        phone:phone,
        details: {
          title:details.title,
          profession:details.profession,
          location:details.location,
          description:details.description,
          salary:details.salary,
          skillsMust:details.skillsMust,
          skillsNice:details.skillsNice
        }
      });
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

const getByLocation = async (req, res) => {
  try {
    const { location, profession } = req.body;
    if (location && profession) {
      const postings = await Posting.find({
        "details.location": location,
        "details.profession": profession
      });
      res.status(200).send( postings );
    } else if (location && !profession) {
      const postings = await Posting.find({
        "details.location": location
      });
      res.status(200).send( postings );
    } else if (profession && !location) {
      const postings = await Posting.find({
        "details.profession": profession
      });
      res.status(200).send( postings );
    }
    //validateObjectId(id);
    // if (postings.length == 0) {
    //   throw new Error(`It is no postings in ${location}`);
    // }
    
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getByCompany = async (req, res) => {
  try {
    const { company } = req.body;
    //validateObjectId(id);
    const postings = await Posting.find({"company": company});
    if (postings.length == 0) {
      throw new Error(`It is no postings for ${company}`);
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
  const {
    company,
    email,
    phone,
    details
  } = req.body;
  try {
    validateObjectId(id);
   // validateNumber(creditAmount);
    const posting = await Posting.findById(id);
    posting.company =company;
    posting.email = email;
    posting.phone = phone;
    posting.details = details

    posting.date = Date.now();
    const updatedPosting = await posting.save();
    res.status(200).send({ message: `Posting updated successfuly` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllPostings, addPosting, getByLocation, getByCompany, deletePosting, updatePosting };