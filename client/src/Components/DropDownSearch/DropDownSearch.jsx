import React from "react";
import './index.css';
const DropDownSearch = (props) => {

    const optionList = props.searchingData.list;
    const placeholder = props.searchingData.placeholder;
    const onChange = props.onChange;
    
    return (
        <div className="searching-button">
            <input 
                list={placeholder}
                placeholder={placeholder}
                onChange={onChange}
                className={`serching-input search-${placeholder}`}/>
            <datalist id={placeholder} className="options-list" >
                {optionList.map((option) => <option value={option} key={option} className="option-item"></option>)}
            </datalist>
        </div>
    );
}
export default DropDownSearch;
         
       
