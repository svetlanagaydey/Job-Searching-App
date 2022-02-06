import { Link } from 'react-router-dom';

import "./index.css";
import DropDownSearch from "../../DropDownSearch/DropDownSearch";
import HeaderMain from "../../HeaderMain/HeaderMain";
import ArticlesSideMain from "../../ArticlesSideMain/ArticlesSideMain";
import LastPostingsMain from "../../LastPostingsMain/LastPostingsMain"
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
    const [searchReq, setSearchReg] = useState({});
    useEffect(() => {
        console.log("state: ",searchReq);
     }, [searchReq]);
    const onchange = (e) => {
        const searchKey = e.target.placeholder;
        const searchValue = e.target.value;
        //setSearchReg({[searchKey]:searchValue})
        setSearchReg({ ...searchReq, [searchKey]:searchValue})
    }
    const setLocalStorage = () => {
        localStorage.setItem("searchFilter", searchReq);
    }
    return (
        <div className="container">
            <HeaderMain />
            <section className="searching-block">
                <DropDownSearch searchingData={cities} onChange={onchange}/>
                <DropDownSearch searchingData={professions}  onChange={onchange} />
                <Link to="/filterdPostings" state={searchReq} onClick={setLocalStorage} className="button__filter">
                    Filtered postings
                </Link>
                <Link to="/postings" className="button__show-all">
                    Show all postings
                </Link>
            </section>
            <main className="main">
                <div className="main__all-postings" >
                    <LastPostingsMain />
                </div>
                <div className="main__articles-menu">
                    <ArticlesSideMain />
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}
export default StartPage;