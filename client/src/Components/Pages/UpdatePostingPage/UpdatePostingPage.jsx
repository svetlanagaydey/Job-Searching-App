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
  const [isUpdated, setIsUpdated] = useState(false);


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
      console.log("updated from client");
      setIsUpdated(true);
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
  }, [company, email, phone, details, isUpdated]);

  const onHandleChange = (e) => {
        const key = e.target.name
        const value = e.target.value;
       setDetails({...details, [key]:value})
  }
  const succesMesage = () => {
    return <h2 className="success-message">Posting Updated Successfuly</h2>
  }
  const updadeForm = () => {
    return (
      <main className="update__container">
        <h2 className="update__header">Check and fix your form, please</h2>
        <form onSubmit={updatePosting} className="form">

          <div className="form-field">
            <label htmlFor="company" className="update__label">Company Name</label>
            <input type="text"
              id="company"
              className="field-value"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="update__label">Company Email</label>
            <input type="text"
              id="email"
              className="field-value"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        
          <div className="form-field">
            <label htmlFor="phone" className="update__label">Company Pnohe Number</label>
            <input type="text"
              id="phone"
              className="field-value"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="salary" className="update__label">Salary</label>
            <input type="text"
              id="salary"
              name="salary"
              className="field-value"
              value={details.salary}
              onChange={onHandleChange}
            />
          </div>
        
          <div className="form-field">
            <label className="update__label">Job Title</label>
            <input type="text"
            className="field-value"
              name="title"
              value={details.title}
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="update__label">Profession</label>
            <input type="text"
              name="profession" 
              value={details.profession}
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="update__label">Location</label>
            <input type="text"
              name="location" 
              value={details.location}
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="update__label">Job Description</label>
            <textarea type="text"
              name="description"
              className="update__description"
              cols="40"
              value={details.description}
              onChange={onHandleChange}
            />
          </div>

        <input type="submit" value="SAVE CHANGES" className="submit-button"/>
      </form>
      </main>
    )
  }
  return (
    <div className="container">
      <HeaderMain />
      {isUpdated && succesMesage()};
      {!isUpdated && updadeForm()}
    </div>
  )
}
export default UpdatePostingPage;