import React, {useState, useEffect} from 'react';
// import Header from '../../HeaderMain/HeaderMain';
import myApi from '../../api/Api'
//import { useParams } from 'react-router-dom';
import './index.css';

const PostingsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getReq()
	}, []);

	const getReq = async () => {
    try {
      const { data } = await myApi.get('/all');
      setData(data.postings);
    } catch (e) {
      console.log(e);
    }
	};
	const changeVisible = function(id) {
		document.getElementById(id).classList.toggle('visible');
}
  
	const print = () => {
		return (
			<ul className="jobs-list">
				{data.map((posting, ind) => {
					return (
						<li className="posting" key={ind}>
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
									<span className="field-name">Salary: </span>
									<span className="job-salary">{posting.details.salary}</span>
								</div>
								<button className="show-hide-button" onClick={() => changeVisible(`id${ind}`)}>SHOW / HIDE</button>
								<div id={`id${ind}`} className="hidden-block">
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
						</li>
					);
				})}
			</ul>
		);
	}
    return (
      <div className="all-jobs-block">
        <h2 className="all-jobs__header">All Jobs</h2>
			  {print()}
      </div>
    )
}

export default PostingsPage;