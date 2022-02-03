import { Link } from 'react-router-dom';

import "./index.css";
import DropDownSearch from "../../DropDownSearch/DropDownSearch";
import HeaderMain from "../../HeaderMain/HeaderMain";
import { useState, useEffect } from 'react';

const cities = {
    placeholder: "location",
    logo: "",
    list: [
    "Akko", "Ariel", "Ashdod", "Ashkelon", "Bay Yam", "Beer Sheva", "Bet Shemesh", "Dimona", "Eilat", "Elad", "Hadera", "Haifa", "Herzliya", "Jerusalem", "Karmiel", "Kfar Saba", "Kiryat Gat", "Lod", "Modiin", "Netanya", "Petah Tirva", "Raanana", "Ramla", "Rehovot", "Tel-Aviv", "Yavne"
    ]
}
const professions = {
    placeholder: "profession",
    logo: "",
    list: [
    "Technical Support", "Design & Creative", "Software & Engeneering"
    ]
}

const StartPage = () => {
    const [searchReq, setSearchReg] = useState({location: "", profession: ""});
    useEffect(() => {
        console.log("state: ",searchReq);
     }, [searchReq]);
    const onchange = (e) => {
        const searchKey = e.target.placeholder;
        const searchValue = e.target.value;
        setSearchReg({ ...searchReq, [searchKey]:searchValue})
    }
    return (
        <div className="container">
            <HeaderMain />
            <div className="searching-block">
                <DropDownSearch searchingData={cities} onChange={onchange}/>
                <DropDownSearch searchingData={professions}  onChange={onchange} />
                <Link to="/postings" className="button__show-all">
                    Show all postings
                </Link>
            </div>
        </div>
    )
}
export default StartPage;