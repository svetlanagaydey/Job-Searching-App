import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderMain from "../../HeaderMain/HeaderMain";
import myApi from '../../../api/Api';
import PostingsOneCompany from '../../PostingsOneCompany/PostingsOneCompany';
import './index.css';

const EmployersPage = () => {
	const [company, setCompany] = useState("");
	// const [data, setData] = useState([]);

	const req = {"company": company};

	// useEffect(() => {
	// 	getReq();
	// 	console.log(company);
	// 	console.log(data.postings)
	// }, [company])

	// const getReq = async () => {
  //       try {
	// 					const { data } = await myApi.post('/company', req);
	// 					setData(data.postings);
  //           console.log("Data from react: ",data);
  //           // if (data.length===0) {
  //           //     setIsFinded(false);
  //           // }
  //       } catch (e) {
  //           console.log("ERROR FROM REACT ", e);
  //       }
  //   };

	const onHandleChange = (e) => {
		const inputValue = e.target.value;
		setCompany(inputValue);
	}
	return (
		<div className="employers-page">
			<HeaderMain />      
			<div className="epmloyers-container">
				<div className="employers__functions">
					<div className="eployers__input-block">
						<label>Find Your Post by Company Name</label>
						<input type="text" className="employers__input" placeholder="Company" onChange={onHandleChange}/>
					</div>
					<Link to="/addPosting" className="new-post-button">Add new posting</Link>
				</div>
				
			</div>
			<PostingsOneCompany req={req} />
		</div>
	)
}
export default EmployersPage;