import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./Review.css"

const Review = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    return(
        <div className="Review" ref={ref}>
            <div className="review-content w3-display-container">
                <div className="review-box w3-display-middle w3-center">
                    <h1>웹킷640과 함께한 학생들의 이야기를 들어보세요.</h1>
                    <div id="reviewCarousel" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#reviewCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#reviewCarousel" data-slide-to="1"></li>
                            <li data-target="#reviewCarousel" data-slide-to="2"></li>
                        </ul>
                        { (isBigScreen || isMediumScreen) &&
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="item-left"/>
                                    <img className="item-right"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="item-left"/>
                                    <img className="item-right"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="item-left"/>
                                    <img className="item-right"/>
                                </div>
                            </div>
                        }
                        { isSmallScreen &&
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="item-left"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="item-left"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="item-left"/>
                                </div>
                            </div>
                        }
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                    <button>더 많은 후기 보기></button>
                </div>
            </div>
        </div>
    )
})

export default Review;