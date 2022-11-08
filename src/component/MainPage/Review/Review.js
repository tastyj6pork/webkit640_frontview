import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Review.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    return(
        <div className="Review" ref={ref}>
            <div className="review-content w3-display-container">
                <div className="review-box w3-display-middle w3-center">
                    <h1>웹킷640과 함께한 학생들의 이야기를 들어보세요.</h1>
                    <div id="reviewCarousel">
                        <button className="carousel-prev-btn">
                            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                        </button>
                        { (isBigScreen || isMediumScreen) &&
                            <div className="carousel-content">
                                <div className="citem">
                                    <div className="item-left">
                                        <div className="item-content">
                                            <table>
                                                <tbody>
                                                    <tr className="title-area">
                                                        <td className="title-td"><h2>제목</h2></td>
                                                        <td className="image-td"><img src="#"/></td>
                                                    </tr>
                                                    <tr className="writer">
                                                        <td>글쓴이 | 학과</td>
                                                    </tr>
                                                    <tr className="content">
                                                        <td>내용</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="item-right"/>
                                </div>
                            </div>
                        }
                        { (isSmallScreen) &&
                            <div className="carousel-content">
                                <div className="citem">
                                <div className="item-left">
                                    <div className="item-content">
                                        <table>
                                            <tbody>
                                                <tr className="title-area">
                                                    <td className="title-td">
                                                        <h2>제목</h2></td>
                                                    <td className="image-td">
                                                        <img src="#"/></td>
                                                </tr>
                                                <tr className="writer">
                                                    <td>글쓴이 | 학과</td>
                                                </tr>
                                                <tr className="content">
                                                    <td>내용</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        <button className="carousel-next-btn">
                            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                        </button>
                    </div>
                    <button className="more-btn">더 많은 후기 보기></button>
                </div>
            </div>
        </div>
    )
})

export default Review;