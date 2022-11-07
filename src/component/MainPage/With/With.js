import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./With.css"

function With() {
    useEffect(()=>{
        let roller = document.querySelector(".moving-box");
        let clone = roller.cloneNode(true);
        console.log(clone)
        clone.id = 'roller2';
        document.querySelector('.wrapper').appendChild(clone);
        document.querySelector('#roller1').style.left = '0px';
        document.querySelector('#roller2').style.left =
            document.querySelector('.moving-box ul').offsetWidth + 'px';
        roller.classList.add('original');
        clone.classList.add('clone');
    })
    
    return(
        <div className="With">
            <div className="with-content w3-display-container">
                <div className="with-box w3-display-middle w3-center">
                    <h2>지금 참여중인 컨소시엄들</h2>
                    <div className="wrapper">
                        <div id="roller1" className="moving-box animate-slider">
                            <ul>
                                <li><img src="#"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default With;