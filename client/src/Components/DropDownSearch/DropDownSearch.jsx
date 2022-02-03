import React from "react";
import './index.css';
const DropDownSearch = (props) => {

    const optionList = props.searchingData.list;
    const placeholder = props.searchingData.placeholder;
    const onChange = props.onChange;
    
    return (
        <div className="searchin-button">
            <input 
                list={placeholder}
                placeholder={placeholder}
                onChange={onChange}
                className="serching-input"/>
            <datalist id={placeholder} className="options-list" >
                {optionList.map((option) => <option value={option} key={option}></option>)}
            </datalist>
        </div>
    );
}
export default DropDownSearch;
         
       
