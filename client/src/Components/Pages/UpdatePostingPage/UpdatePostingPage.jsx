import React, { useState , useEffect } from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import { useLocation } from "react-router-dom";
import myApi from '../../../api/Api';
import './index.css';

const UpdatePostingPage = () => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState({});


  const location = useLocation();
  const currentPosting = location.state;
  const posting = JSON.parse(currentPosting);
  console.log(posting.company);

  const updatePosting = async(e) => {
    e.preventDefault();
    try {  
      await myApi.put(`/update/${posting._id}`, {
          company,
          email,
          phone,
          details
      });
      console.log("updated from client")
  } catch (err) {
      console.log(err.message);
  }
    //console.log("start");
  }
  useEffect(() => {
    setCompany(posting.company);
    setEmail(posting.email);
    setPhone(posting.phone);
    setDetails(posting.details);
  }, [])

  useEffect(() => {
    console.log(company, email, phone)
  }, [company, email, phone, details]);

  const onHandleChange = (e) => {
        const key = e.target.name
        const value = e.target.value;
       setDetails({...details, [key]:value})
    }
  return (
    <div>
      <HeaderMain />
      <h2 className="all-jobs__header">Updating form</h2>
      <h3>Update Needed Fields And Press SAVE</h3>
      <form onSubmit={updatePosting} className="form center">
        <div className="form-field">
          <label htmlFor="company" className="field-label">Company Name</label>
          <input type="text"
            id="company"
            className="field-value"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="field-label">Company Email</label>
          <input type="text"
            id="email"
            className="field-value"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="phone" className="field-label">Company Pnohe Number</label>
          <input type="text"
            id="phone"
            className="field-value"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="salary" className="field-label">Salary</label>
          <input type="text"
            id="salary"
            name="salary"
            className="field-value"
            value={details.salary}
            onChange={onHandleChange}
          />
        </div>
        
        <div className="form-field">
          <label className="field-label">Job Title</label>
          <input type="text"
          className="field-value"
            name="title"
            value={details.title}
            onChange={onHandleChange}
          />
        </div>

            <div className="form-field">
              <label className="field-label">Profession</label>
              <input type="text"
                name="profession" 
                value={details.profession}
                onChange={onHandleChange}
              />
            </div>

            <div className="form-field">
              <label className="field-label">Location</label>
              <input type="text"
                name="location" 
                value={details.location}
                onChange={onHandleChange}
              />
            </div>

            <div className="form-field">
              <label className="field-label">Job Description</label>
              <textarea type="text"
                name="description"
                className="field-description"
                cols="40"
                value={details.description}
                onChange={onHandleChange}
              />
            </div>


        <input type="submit" value="SAVE" className="submit-button"/>
      </form>
    </div>
  )
}
export default UpdatePostingPage;