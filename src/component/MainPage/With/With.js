import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./With.css"

function With() {
    const [makeClone, setMakeClone] = useState(false);
    const [consortium, setConsortium] = useState([
        {
            img:'/images/logo/범일정보.png',
        },
        {
            img:'/images/logo/유라클.png',
        },
        {
            img:'/images/logo/휴비즈.png',
        },
        {
            img:'/images/logo/이티에듀.png',
        },
        {
            img:'/images/logo/경일대.png',
        },
        {
            img:'/images/logo/대가대.png',
        },
        {
            img:'/images/logo/안동대.png',
        }
    ])

    useEffect(()=>{
        console.log("useEffect")
        if(!makeClone) {
            let roller = document.querySelector("#roller1");
            let clone = roller.cloneNode(true);
            clone.id = 'roller2';
            console.log(document.querySelector('#roller1 ul').offsetWidth)
            document.querySelector('.wrapper').appendChild(clone);
            document.querySelector('#roller1').style.left = '0px';
            document.querySelector('#roller2').style.width = `${document.querySelector('#roller1 ul').offsetWidth}px`;
            document.querySelector('#roller2').style.left = `${document.querySelector('#roller1 ul').offsetWidth}px`;
            roller.classList.add('original');
            clone.classList.add('clone');
            setMakeClone(true);
            console.log(document.querySelector('.wrapper'))
        }
    })
    
    return(
        <div className="With">
            {console.log("return")}
            <div className="with-content w3-display-container">
                <div className="with-box w3-display-middle w3-center">
                    <h2>지금 참여중인 컨소시엄들</h2>
                    <div className="wrapper">
                        <div id="roller1" className="roller animate-slider">
                            <ul>
                                {consortium.map((item, i)=>(
                                    <li key={i}><img src={item.img}/></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default With;