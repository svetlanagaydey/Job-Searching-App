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
        <section>
          <div className="info-block">
								<h3 className="job-title">{posting.details.title}</h3>
								<div className="field">
									<span className="field-name">Company: </span>
									<span className="job-company">{posting.company}</span>
								</div>
								<div className="field">
									<span className="field-name">Job Location: </span>
									<span className="job-location">{posting.details.location}</span>
								</div>
								<div className="field">
									<span className="field-name">Profession category: </span>
									<span className="job-location">{posting.details.profession}</span>
								</div>
								<div className="field">
									<span className="field-name">Salary: </span>
									<span className="job-salary">{posting.details.salary}</span>
								</div>
								<div className="hidden-block">
									<div className="job-description">
										<div className="field">
											<h4 className="field-name">Job description: </h4>
											{posting.details.description}
										</div>
										<h4 className="field-name">Skills must to have</h4>
										<ul className="field job-skills-must">
												{posting.details.skillsMust.map((skill) => <li key={skill} className="skill">{skill}</li>)}
										</ul>
									</div>
									<div className="field">
										<span className="field-name">Phone Number: </span>
										<span className="job-company">{posting.phone}</span>
									</div>
									<div className="field">
										<span className="field-name">Email for rezume: </span>
										<span className="job-company">{posting.email}</span>
									</div>
								</div>
							</div>

              <input type="button" value="Delete Posting" onClick={() => deletePosting()}/>
        </section>
      )
    }
    return (
        <div>
            <HeaderMain />
            <h2>Deleting Posting</h2>
            {isDeleted && deletedMessage()}
            {!isDeleted && printDeletingPosting()}
        </div>
    )
}
export default DeletePostingPage;