import React, { useState } from "react";
import './index.css';
const DropDownSearch = (props) => {
    const [chiose, setChiose] = useState({ chiose: "" });

    const optionList = props.searchingData.list;
    const placeholder = props.searchingData.placeholder;

    const handleChange = e => {
        setChiose({ ...chiose, [e.target.name]: e.target.value });
    };
  
    return (
    <div className="searchin-button">
        <input list={placeholder} placeholder={placeholder} className="serching-input"/>
        <datalist id={placeholder} className="options-list" onChange={handleChange}>
            {optionList.map((option) => <option value={option}></option>)}
        </datalist>
    </div>
    );
        }
export default DropDownSearch;
         
       
