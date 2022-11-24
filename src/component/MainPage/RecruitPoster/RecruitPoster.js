import React, { useEffect, useState } from 'react';
import "./RecruitPoster.css"
import StickyHeader from '../../StickyHeader/StickyHeader';
import { call } from '../../../service/ApiService';
import { API_BASE_URL } from '../../../app-config';

function RecruitPoster(props) {
    const [imageUrl ,setImageUrl] = useState();
    useEffect(()=>{
        call("/main/data", "GET").then((res)=>{
            //console.log(res);
            setImageUrl(res.imagePath);
        })
    },[])
    return (
        <div className="RecruitPoster">
            <StickyHeader/>
            <div className="recruitPoster w3-display-container">
                <div className="recruitPoster-box w3-display-middle w3-center">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    )
}


export default RecruitPoster;