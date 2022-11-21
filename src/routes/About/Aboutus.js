import { React, useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { throttle } from 'lodash';
import "./Aboutus.css"
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import About01 from "../../component/About/About01";
import About02 from "../../component/About/About02";
import About03 from "../../component/About/About03";
import Arrow from "../../component/About/Arrow";

function Aboutus() {
    const [scrollNum, setScrollNum] = useState(1);
    const [isNavWhite, setIsNavWhite] = useState(true);
    const [arrow, setArrow] = useState('﹀');
    const headerRef = useRef(null);
    const about01Ref = useRef(null);
    const about02Ref = useRef(null);
    const about03Ref = useRef(null);

    const arrowClick = () => {
        if(window.scrollY < 720) {
            about01Ref.current?.scrollIntoView({behavior:'smooth'});
            setIsNavWhite(true);
        }
        else if(window.scrollY >= 720 && window.scrollY < 1500) {
            about02Ref.current?.scrollIntoView({behavior:'smooth'});
            setIsNavWhite(false);
        }
        else if(window.scrollY >= 1500 && window.scrollY < 2200) {
            about03Ref.current?.scrollIntoView({behavior:'smooth'});
            setIsNavWhite(false);
            setArrow('︿');
        }
        else if(window.scrollY >= 2200){
            headerRef.current?.scrollIntoView({behavior:'smooth'});
            setIsNavWhite(false);
        }
    }

    const throttledScroll = useMemo(()=>
        throttle(()=>{
            if(window.scrollY < 800) {
                setIsNavWhite(true);
                setArrow('﹀');
            }
            else if(window.scrollY > 800 && window.scrollY < 1600) {
                setIsNavWhite(false);
                setArrow('﹀');
            }
            else if(window.scrollY > 1500 && window.scrollY < 2000) {
                setIsNavWhite(false);
                setArrow('﹀');
            }
            else if(window.scrollY >= 2000){
                setIsNavWhite(false);
                setArrow('︿');
            }
        }, 300), [isNavWhite]
    );

    useEffect(()=>{
        window.addEventListener('scroll', throttledScroll);
        return() => {
            window.removeEventListener('scroll', throttledScroll);
        }
    }, [throttledScroll]);

    return (
        <div className="Aboutus" ref={headerRef}>
            { isNavWhite && <Header/>}
            { !isNavWhite && <Header isMain={true}/>}
            <Arrow onclick={arrowClick} shape={arrow}/>
            <div className="aboutus-content w3-wide">
                <header id="aboutus-header" className="w3-display-container">
                    <div className="aboutus-background"></div>
                    <div className="w3-display-middle w3-center">
                        <span>SW전문인재양성사업</span>
                        <p>웹 개발자 양성 프로그램</p>
                        <h2>웹킷 WebKIT640</h2>
                        <label>웹 개발자로 취업할 사람 모여라!</label>
                        <label>실무 중심의 SW전문교육 수강하고 현장수요에 걸맞는 인재 되자!</label>
                    </div>
                </header>
                <About01 ref={about01Ref}/>
                <About02 ref={about02Ref}/>
                <About03 ref={about03Ref}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Aboutus;