import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myApi from '../../api/Api';
// import './index.css'

const PostingsOneCompany = ({req}) => {
	// const [isFinded, setIsFinded] = useState(true)
	const [data, setData] = useState();
	const [searchRequest,  setSearchRequest] = useState(req);
	// const location = useLocation();
	// const req = location.state;
	console.log(req);

	useEffect(() => {
		getReq()
	}, [req]);

	const getReq = async () => {
			try {
					const { data } = await myApi.post('/company', req);
					setData(data.postings);
					console.log(data.postings);
					// if (data.length===0) {
					// 	setIsFinded(false);
					// }
			} catch (e) {
				console.log("ERROR FROM REACT ", e);
			}
	};

  const printFilteredPostings = () => {
    return (
      <ul className="jobs-list">
        {data.map((posting, ind) => {
          return (
            <li className="posting" key={ind} _id={posting._id}>
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
              </div>
              <div className="update-delete-buttons">
                <Link to="/updatePosting" type="button" value="Update" className="update-button"/>
                <Link to="/deletePosting" type="button" value="Delete" className="delete-button"/>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

    // const errorMessage = () => {
    //     return <div className="error-message">try enother searching request</div>
		// }
		
	return (
		<main className="filtered-postings__block">
			{/* {!isFinded && errorMessage()} */}
			{/* {datas.map(el => console.log(el))} */}
			{data && printFilteredPostings()}
		</main>
	)
}
export default PostingsOneCompany;