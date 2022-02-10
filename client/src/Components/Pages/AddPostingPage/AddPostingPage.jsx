import HeaderMain from '../../HeaderMain/HeaderMain';
import { useState, useEffect } from 'react';
import myApi from '../../../api/Api';
import './index.css'

const AddPostingPage = () => {
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState({});
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        console.log(details)
    }, [company,email, phone, details])
    
    const setNewPost = async(event) => {
        event.preventDefault()
        try {  
            await myApi.post('/', {
                company,
                email,
                phone,
                details
            });
            setIsAdded(true);
        } catch (err) {
            console.log(err.message);
        }
    }

    const onHandleChange = (e) => {
        const key = e.target.name
        const value = e.target.value;
       setDetails({...details, [key]:value})
    }

    const seccessMessage = () => {
      return <div className="success-mesage">Posting Added Successfuly</div>
    }
    // const addingForm = () => {
    //   console.log("adding")
    // }
    const addingForm = () => {
      return (
      <div className="form-container">
        <h2 className="form-title">Create new job posting</h2>
        <form className="form" onSubmit={setNewPost}>
          <div className="form-field">
            <label className="field-label">Company Name For This job</label>
            <input type="text" name="company" value={company}
              onChange={(e) => {setCompany(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Company Email</label>
            <input type="text" name="email" value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Company Phone Number</label>
            <input type="text" name="phone" value={phone}
              onChange={(e) => { setPhone(e.target.value)}}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Job Title</label>
            <input type="text" name="title" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Profession</label>
            <input type="text" name="profession" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Location</label>
            <input type="text" name="location" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Salary</label>
            <input type="text" name="salary" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label className="field-label">Job Description</label>
            <textarea type="text" name="description" className="field-description" cols="40"
              onChange={onHandleChange}
            />
           </div>
          <div className="form-field">
             <label className="field-label">Skills Must to Have</label>
           <textarea type="text" name="skills" className="field-description" cols="40"
              onChange={onHandleChange}
            />
          </div>
          
          <input className="addButton" type="submit" value="Add new post" />
        </form>
      </div>
      )
    }
        

return (
    <div className="container">
        <HeaderMain />
        {isAdded && seccessMessage()}
        {!isAdded && addingForm()}
    </div>
  )
}
export default AddPostingPage;