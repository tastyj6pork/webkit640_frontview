import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./Aboutus.css"
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import About01 from "../../component/About/About01";
import About02 from "../../component/About/About02";
import About03 from "../../component/About/About03";

function Aboutus() {
    return (
        <div className="Aboutus">
            <Header/>
            <div className="aboutus-content w3-wide">
                <header id="abouts-header" className="w3-display-container">
                    <div className="aboutus-background"></div>
                    <div className="w3-display-middle w3-center">
                        <h2>SW전문인재양성</h2>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Aboutus;