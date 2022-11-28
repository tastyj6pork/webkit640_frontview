import React, { useEffect, useState } from 'react';
import "./RecruitPoster.css"
import StickyHeader from '../../StickyHeader/StickyHeader';
import { call } from '../../../service/ApiService';
import { API_BASE_URL } from '../../../app-config';

function RecruitPoster() {
    const urlParams = new URL(document.location).searchParams;
    const [recruitImg, setRecruitImg] = useState(null);

    useEffect(()=>{
        const urlParams = new URL(document.location).searchParams;
        const recruitImg = urlParams.get('recruitImg');
        setRecruitImg(recruitImg);
    },[])

    return (
        <div className="RecruitPoster">
            <StickyHeader/>
            <div className="recruitPoster-container w3-display-container w3-center">
                <div className="recruitPoster-box">
                    <img src={recruitImg} onClick={()=>window.open(recruitImg)}/>
                </div>
            </div>
        </div>
    )
}


export default RecruitPoster;