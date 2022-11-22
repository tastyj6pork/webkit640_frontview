import React, { useEffect, useState } from 'react';
import "./RecruitPoster.css"
import StickyHeader from '../../StickyHeader/StickyHeader';

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
            <div className="recruitPoster w3-display-container">
                <div className="recruitPoster-box w3-display-middle w3-center">
                    <img src={urlParams.get('recruitImg')} />
                    {console.log(recruitImg)}
                </div>
            </div>
        </div>
    )
}


export default RecruitPoster;