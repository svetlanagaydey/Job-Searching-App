import React, {useState, useEffect} from 'react';
import myApi from '../../api/Api'
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
	const changeVisible = function(ind) {
    document.getElementById(`block${ind}`).classList.toggle('visible');
    document.getElementById(`desc${ind}`).classList.toggle('visible');
    //document.getElementById(id).classList.toggle('visible');
  }
  const hiddenDescription = (string) => {
    return string.substring(0, 175) + " ..."
  }
  
	const allJobs = () => {
		return (
			<ul className="jobs-list">
				{data.map((posting, ind) => {
					return (
						<li className="posting" key={ind} _id={posting._id}>
              <div className={`company-logo ${posting.company}-logo`}></div>
							<div className="posting-block">
								<h3 className="job-title">{posting.details.title}</h3>
                <div className="posting__info-row">
                    <span className="field job-company">{posting.company}</span>
                    <span className="field job-location">{posting.details.location}</span>
                    <span className="field job-location">{posting.details.profession}</span>
                    <span className="field job-salary">{posting.details.salary}</span>
                </div>

                <button className="show-hide-button" onClick={() => changeVisible(ind)}>MORE</button>
                <div id={`desc${ind}`} className='short-description visible'>{hiddenDescription(posting.details.description)}</div>
						
								<div id={`block${ind}`} className="hidden-block">
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
						</li>
					);
				})}
			</ul>
		);
	}
    return (
      <div className="all-jobs-block">
        <h2 className="all-jobs__header">All Jobs</h2>
			  {allJobs()}
      </div>
    )
}

export default PostingsPage;