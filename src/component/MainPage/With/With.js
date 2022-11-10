import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
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
    const [rollerWidth, setRollerWidth] = useState(null);
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    useEffect(()=>{
        setRollerWidth(document.querySelector('#roller1 ul').offsetWidth);
    }, [rollerWidth])
    
    useEffect(()=>{
        if(!makeClone){
            let roller = document.querySelector("#roller1");
            let clone = roller.cloneNode(true);
            let roller_ul_style = document.querySelector("#roller1 ul").style;
            clone.id = 'roller2';
            document.querySelector('.wrapper').appendChild(clone);
            document.querySelector('#roller1').style.left = '0px';
            //if(isSmallScreen) roller_ul_style.width = `${rollerWidth}px`;
            roller.classList.add('original');
            setMakeClone(true);
        } else {
            let clone = document.querySelector("#roller2");
            let clone_ul_style = document.querySelector('#roller2 ul').style;
            //if(isSmallScreen) clone_ul_style.width = `${rollerWidth}px`;
            clone_ul_style.left = `${rollerWidth}px`;
            clone.classList.add('clone');
        }
        //console.log(document.querySelector('.wrapper'))
    })

    
    return(
        <div className="With">
            {/* {console.log("return,"+` ${rollerWidth}px`)} */}
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