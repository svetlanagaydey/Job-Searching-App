import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';
const DropDownSearch = (props) => {
    const [choise, setChiose] = useState("");

    const optionList = props.searchingData.list;
    const placeholder = props.searchingData.placeholder;
    const searchType = props.searchType;

    const handleChange = e => {
        setChiose(e.target.value);
    };
  
    return (
    <div className="searchin-button">
        <input list={placeholder} placeholder={placeholder} onChange={handleChange} className="serching-input"/>
        <Link value="Find" to="/postings" searchtype={searchType} searchinchoise={choise}>FIND</Link>
        <datalist id={placeholder} className="options-list" >
            {optionList.map((option) => <option value={option} key={option}></option>)}
        </datalist>
    </div>
    );
        }
export default DropDownSearch;
         
       
