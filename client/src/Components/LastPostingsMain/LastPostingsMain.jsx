import React, { useState, useEffect } from 'react';
import myApi from '../../api/Api'

const LastPostingsMain = () => {
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
	}};

	const renderLastPostings = () => {
		return (
			<ul className="main__last-jobs-list">
				{data.slice(data.length-3, data.length).map((posting, ind) => {
					return (
						<li className="main__last-job" key={ind}>
							<h3>{posting.details.title}</h3>
							<p className="main__job-company">{posting.company}</p>
							<span className="main__job-location">{posting.details.location}</span>
							<span className="main__job-salary">{posting.details.salary}</span>
							<div>{posting.details.description}</div>
						</li>
					);
				})}
			</ul>
		);
	}

	return <div>
			<h2>Latest postings</h2>
			{renderLastPostings()}
	</div>
}
export default LastPostingsMain;