import HeaderMain from "../../HeaderMain/HeaderMain";
import React, { useState, useEffect } from 'react';
import myApi from '../../../api/Api';
import { useLocation } from "react-router-dom";

const FilteredPostings = () => {
    const [isFinded, setIsFinded] = useState(true)
    const location = useLocation();
    const req = location.state;
    console.log(req);

    useEffect(() => {
        getReq()
    }, []);

    const getReq = async () => {
        try {
            const { data } = await myApi.post('/location', req);
            //const { data } = await axios.post("http://localhost:8080/location", req)
            // let config = {
            //     data: JSON.stringify(req),
            //     method: "get",
            //   };
            // console.log("location request")
            // console.log(req);
            // const data = await a('/location', config);
            console.log(data);
        } catch (e) {
            setIsFinded(false);
            console.log("There is not postings in " + req.location);
            console.log("ERROR FROM REACT ", e);
        }
    };

    const errorMessage = () => {
        return <div>Try enother searching request</div>
    }
    return (
        <div>
            <HeaderMain />
            <h2>Filtered list</h2>
            <h2>You choose filter by professiion: {req.profession}</h2>
            <h2>You choose filter by location: {req.location}</h2>
            {!isFinded && errorMessage()}

            {/* {datas.map(el => console.log(el))} */}

        </div>
    )
}
export default FilteredPostings;