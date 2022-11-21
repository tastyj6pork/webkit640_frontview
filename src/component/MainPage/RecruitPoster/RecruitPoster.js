import React, { useEffect, useState } from 'react';
import "./RecruitPoster.css"
import StickyHeader from '../../StickyHeader/StickyHeader';

function RecruitPoster(props) {
    return (
        <div className="RecruitPoster">
            <StickyHeader/>
            <div className="recruitPoster w3-display-container">
                <div className="recruitPoster-box w3-display-middle w3-center">
                    <img src={props.recruitImg} />
                </div>
            </div>
        </div>
    )
}


export default RecruitPoster;