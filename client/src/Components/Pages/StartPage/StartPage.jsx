import "./index.css";
import DropDownSearch from "../../DropDownSearch/DropDownSearch";
import HeaderMain from "../../HeaderMain/HeaderMain";

const cities = {
    placeholder: "Location: City",
    logo: "",
    list: [
    "Akko", "Ariel", "Ashdod", "Ashkelon", "Bay Yam", "Beer Sheva", "Bet Shemesh", "Dimona", "Eilat", "Elad", "Hadera", "Haifa", "Herzliya", "Jerusalem", "Karmiel", "Kfar Saba", "Kiryat Gat", "Lod", "Modiin", "Netanya", "Petah Tirva", "Raanana", "Ramla", "Rehovot", "Tel-Aviv", "Yavne"
    ]
}
const professions = {
    placeholder: "Job Profession",
    logo: "",
    list: [
    "Technical Support", "Design & Creative", "Software & Engeneering"
    ]
}


const StartPage = () => {
    return (
        <div className="container">
            <HeaderMain />
            <div className="searching-block">
                <DropDownSearch searchingData={cities} />
                <DropDownSearch searchingData={professions} />
            </div>
        </div>
    )
}
export default StartPage;