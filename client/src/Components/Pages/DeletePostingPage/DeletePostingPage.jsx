import React, { useState , useEffect } from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import { useLocation } from "react-router-dom";
import myApi from '../../../api/Api';
import './index.css';

const DeletePostingPage = () => {

    const [isDeleted, setIsDeleted] = useState(false);
    
    const location = useLocation();
    const currentPosting = location.state;
    const posting = JSON.parse(currentPosting);

    useEffect(() => {
    }, [isDeleted])

    const deletedMessage = () => {
      return <h2 className="success-message">Deleted Successfuly</h2>
    }

    const deletePosting = async() => {
      console.log("trying delete")
      try {
        if(posting) {
          myApi.delete(`/${posting._id}`);
          //localStorage.clear('userToDelete');
          setIsDeleted(true);
          console.log(isDeleted)
        }
      } catch (e) {
        console.log(e);
      }
    }

    const printDeletingPosting = () => {
      return (
        <section className="delete-section">
        return (
						<div className="posting">
              <div className={`company-logo ${posting.company}-logo`}></div>
							<div className="posting-block">
								<h3 className="job-title">{posting.details.title}</h3>
                <div className="posting__info-row">
                    <span className="field job-company">{posting.company}</span>
                    <span className="field job-location">{posting.details.location}</span>
                    <span className="field job-location">{posting.details.profession}</span>
                    <span className="field job-salary">{posting.details.salary}</span>
                </div>
								<div  className="hidden-block visible">
									<div className="job-description">
                    {posting.details.description}
										
										<h4 >Skills must to have</h4>
										<ul className="job-skills-must">
												{posting.details.skillsMust.map((skill) => <li key={skill} className="skill">{skill}</li>)}
										</ul>
									</div>
									<div className="contact-info">
                    <h4 className="contact-us">Contact us:</h4>
										<span className="field contact">Phone: {posting.phone}</span>
										<span className="field contact">Email: {posting.email}</span>
									</div>
								</div>
							</div>
						</div>

              <input type="button" className="delete__button" value="Delete Posting" onClick={() => deletePosting()}/>
        </section>
      )
    }
    return (
        <div className="container">
            <HeaderMain />
            <h2 className="delete__title">Deleting this Posting?</h2>
            {isDeleted && deletedMessage()}
            {!isDeleted && printDeletingPosting()}
        </div>
    )
}
export default DeletePostingPage;