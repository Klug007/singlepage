import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jsondata from "../../data.json";

function Singlepage() {
    const [data, setData] = useState(null);
    let paramId = useParams().id;

    useEffect(() => {
        let singleitem = Jsondata.find((el) => el.id == paramId);
        setData(singleitem);
        console.log(singleitem);
    }, [paramId]);

    return (
        <div>
            <h1>Single page</h1>
            <h1>{data?.title}</h1>
            <img src={data?.image} alt="" />
        </div>
    );
}

export default Singlepage;
