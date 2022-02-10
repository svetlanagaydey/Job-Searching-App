import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myApi from '../../api/Api';
import './index.css'

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
  const hiddenDescription = (string) => {
    return string.substring(0, 175) + " ..."
  }

  const printFilteredPostings = () => {
    return (
      <ul className="employer__jobs-list">
        {data.map((posting, ind) => {
          return (
            <li className="employer__posting" key={ind} _id={posting._id}>
              <div className={`company-logo ${posting.company}-logo`}></div>
                <div className="posting-middle">
                  <h3 className="job-title">{posting.details.title}</h3>
                  <div className="employer__info-block">
                  <div className="field">
                    <span className="field-name">Company: </span>
                    <span className="field-value">{posting.company}</span>
                  </div>
                  <div className="field">
                    <span className="field-name">Job Location: </span>
                    <span className="field-value">{posting.details.location}</span>
                  </div>
                  <div className="field">
                    <span className="field-name">Profession category: </span>
                    <span className="field-value">{posting.details.profession}</span>
                  </div>
                  <div className="field">
                    <span className="field-name">Salary: </span>
                    <span className="field-value">{posting.details.salary}</span>
                  </div>
                </div>
                <div className='short-description visible'>{hiddenDescription(posting.details.description)}</div>
              </div>
              <div className="update-delete-buttons">
                <Link to="/updatePosting" type="button" className="update-button" state={JSON.stringify(posting)}>Update</Link>
                <Link to="/deletePosting" type="button" className="delete-button" state={JSON.stringify(posting)}>Delete</Link>
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