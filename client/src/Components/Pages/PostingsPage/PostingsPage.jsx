import React, {useState, useEffect} from 'react';
import Header from '../../HeaderMain/HeaderMain';
import myApi from '../../../api/Api'
//import { useParams } from 'react-router-dom';
import './index.css';

const PostingsPage = (props) => {
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
  
	const print = () => {
		return (
			<ul className="jobs-list">
				{data.map((posting, ind) => {
					return (
						<li className="posting" key={ind}>
							<div className="info-block">
                <h3>{posting.details.title}</h3>
                <span className="job-company">{posting.company}</span>
                <span className="job-location">{posting.location}</span>
                <span className="job-salary">{posting.details.salary}</span>
                <div className="job-description">
                      <div>{posting.details.description}</div>
                      <ul className="job-skillsMust">
                          {posting.details.skillsMust.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                </div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
    return (
      <div className="container">
        <Header />
        <h2 className="users-header">List of all Jobs</h2>
			  {print()}
      </div>
    )
}

export default PostingsPage;