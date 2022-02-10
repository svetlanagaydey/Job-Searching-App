import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderMain from "../../HeaderMain/HeaderMain";
import myApi from '../../../api/Api';
import PostingsOneCompany from '../../PostingsOneCompany/PostingsOneCompany';
import './index.css';

const EmployersPage = () => {
	const [input, setInput] = useState("");
	const [company, setCompany] = useState("");
	useEffect(() => {
		console.log(input)
	}, [input])

	const onHandleChange = (e) => {
		setInput(e.target.value);
	}
	const getCompany = () => {
		setCompany(input);
	}
	const req = {"company": company};
	return (
		<div className="container">
			<HeaderMain />      
			<div className="employers__functions">
				<div className="eployers__input-block">
					<h2 className="employers-header">Find Your Post by Company Name</h2>
					<input type="text"
					className="employers__input"
					placeholder="Your Company"
					onChange={onHandleChange}
					/>
				</div>
				<button className="find-button" onClick={getCompany} >Find</button>
			</div>
			{company && <PostingsOneCompany req={req}/>}
			
		</div>
	)
}
export default EmployersPage;