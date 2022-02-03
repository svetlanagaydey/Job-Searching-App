import HeaderMain from "../../HeaderMain/HeaderMain";
import React, {useState, useEffect} from 'react';
import myApi from '../../../api/Api';
import { useLocation } from "react-router-dom"

const FilteredPostings = () => {
    const [datas, setData] = useState([]);
    const location = useLocation();
    const req = location.state;
    //const city = location.state.location;
    console.log(req);

    useEffect(() => {
        getReq()
        console.log(datas)
    }, []);

    const getReq = async () => {
        try {
            console.log("location request")
            const { data }  = await myApi.get('/location', {body: JSON.stringify(req)});
            console.log(data);
            setData(datas);

        } catch (e) {
        console.log("error from react ", e);
        }
     };
    return (
        <div>
            <HeaderMain />
        <h2>Filtered list</h2>
        {datas.map(el => console.log(el))}

        </div>
    )
}
export default FilteredPostings;