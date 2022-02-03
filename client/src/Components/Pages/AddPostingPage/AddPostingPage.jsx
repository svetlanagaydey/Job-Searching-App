import HeaderMain from '../../HeaderMain/HeaderMain';
import { useState, useEffect } from 'react';
import myApi from '../../../api/Api';

const AddPostingPage = () => {
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState({});

    useEffect(() => {
        console.log(details)
    }, [company,email, phone, details])

// const details =  {
//     "title": "Senior Software Developer",
//     "profession": "Software & Engeneering",
//     "location": "Herzlia",
//     "salary": 25000,
//     "description": "Microsoft Cloud Operations + Innovation (CO+I) is the team behind building the Microsoft cloud. Within CO+I, the Datacenter Planning & eXecution Engineering (DPXE) team is responsible for delivering datacenter capacity for Microsoft’s cloud business. We have a portfolio of complex, multi-disciplinary, multi-million, multi-year datacenter projects with specific safety, quality, schedule and cost goals. The DPX Engineering team is responsible for architecting, designing and building the next generation of connected systems and experiences to help manage and support critical business functions such as Cost, Schedule, Commissioning, Procurement, Safety, Planning etc. in a real time manner. The team has a charter to deliver against the NorthStar goal of building robust automation for these functions through well engineered systems and at the same time design and build the next gen, ML based, recommendation engine to enable cost and schedule modeling, supply planning, execution planning etc. while integrating with the bigger CO+I ecosystem. In alignment with our Microsoft values, we are committed to cultivating an inclusive work environment for all employees to positively impact our culture every day",
//     "skillsMust": [
//         "5+ years of software development experience shipping production apps or services using the .NET/Azure stack or similar technologies.",
//         "B.S. in Computer Science, an Information systems background or extensive proven expertise in the software development field.",
//         "Software development experience in any two of the following areas: Web or API development, UX technologies, Microsoft Dynamics 365, Cloud services.",
//         "Experience with unit testing, mocking, and dependency injection frameworks",
//         "Excellent analytical & problem-solving skills"
//     ],
//     "skillsNice": [
//         "Experience working through the full product cycle from initial design to rapid production deployment",
//         "Experience with shipping software products across multiple platforms/devices",
//         "Ability to incorporate and understand the needs of our diverse customer base, including customers using assistive technology"
//     ]
// }

    const setNewPost = async(event) => {
        event.preventDefault()
        try {  
            await myApi.post('/', {
                company,
                email,
                phone,
                details
                    //title,
                    // profession,
                    // location,
                    // salary,
                    // description,
                    // skillsMust
                
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    const onHandleChange = (e) => {
        const key = e.target.name
        const value = e.target.value;
       setDetails({...details, [key]:value})
    }
        

return (
    <div>
        <HeaderMain />
        <form className="form" onSubmit={setNewPost}>
          <div className="form-field">
            <label>Company</label>
            <input type="text" name="company" value={company}
              onChange={(e) => {setCompany(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="text" name="email" value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className="form-field">
            <label>Phone number</label>
            <input type="text" name="phone" value={phone}
              onChange={(e) => { setPhone(e.target.value)}}
            />
          </div>

          <div className="form-field">
            <label>Job title</label>
            <input type="text" name="title" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label>Profession</label>
            <input type="text" name="profession" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label>Location</label>
            <input type="text" name="location" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label>Salary</label>
            <input type="text" name="salary" 
              onChange={onHandleChange}
            />
          </div>

          <div className="form-field">
            <label>Description</label>
            <textarea type="text" name="description" 
              onChange={onHandleChange}
            />
          </div>
          
          <input className="addButton" type="submit" value="Add new post" />
        </form>
    </div>
)
}
export default AddPostingPage;