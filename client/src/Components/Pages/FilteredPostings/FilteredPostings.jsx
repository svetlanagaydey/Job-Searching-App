import HeaderMain from "../../HeaderMain/HeaderMain";
import React, { useState, useEffect } from 'react';
import myApi from '../../../api/Api';
import { useLocation } from "react-router-dom";
import './index.css'

const FilteredPostings = () => {
		const [isFinded, setIsFinded] = useState(true)
		const [data, setData] = useState()
    const location = useLocation();
    const req = location.state;
    console.log(req);

    useEffect(() => {
        getReq()
    }, []);

    const getReq = async () => {
        try {
						const { data } = await myApi.post('/location', req);
						setData(data);
            console.log(data);
            if (data.length===0) {
                setIsFinded(false);
            }
        } catch (e) {
            console.log("ERROR FROM REACT ", e);
        }
    };

			const printFilteredPostings = () => {
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
											<span className="field-name">Profession category: </span>
											<span className="job-location">{posting.details.profession}</span>
										</div>
										<div className="field">
											<span className="field-name">Salary: </span>
											<span className="job-salary">{posting.details.salary}</span>
										</div>
										
										<div className="job-description">
											<h4 className="field-name">Job description: </h4>
											{posting.details.description}
										</div>
										<div className="field">
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
								</li>
								);
							})}
					</ul>
				);
			}

    const errorMessage = () => {
        return <div className="error-message">try enother searching request</div>
		}
		
    return (
        <div className="back-container">
            <HeaderMain />
            <main className="filtered-postings__block">
                <div className="request-info">
                    <h2 className="search-req">choosen profession: 
                        <span className="request"> {req.profession}</span>
                    </h2>
                    <h2 className="search-req">choosen location: 
                        <span className="request"> {req.location}</span>
                    </h2>
                </div>
                {!isFinded && errorMessage()}
                {/* {datas.map(el => console.log(el))} */}
                {data && printFilteredPostings()}
            </main>
            
        </div>
    )
}
export default FilteredPostings;