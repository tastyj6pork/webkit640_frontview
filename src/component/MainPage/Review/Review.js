import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Review.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery({query: '(min-width:1201px)'});
    const isMediumScreen = useMediaQuery({query: '(min-width:768px) and (max-width: 1200px)'});
    const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'});

    const settingsForBig = {
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: (
            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
        ),
        prevArrow: (
            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
        ),
    };
    const settingsForSmall = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
        ),
        prevArrow: (
            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
        ),
    };

    const reviewItems = (
        <div className="slid-item">
            <div className="item-content">
                <table>
                    <tbody>
                        <tr className="title-area">
                            <td className="title-td">
                                <h2>제목</h2>
                                <img src="#"/>
                            </td>
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
    )

    return(
        <div className="Review" ref={ref}>
            <div className="review-content w3-display-container">
                <div className="review-box w3-display-middle w3-center">
                    <h1>웹킷640과 함께한 학생들의 이야기를 들어보세요.</h1>
                    <div id="reviewCarousel">
                        { isSmallScreen ?
                            <Slider {...settingsForSmall} className="review-slider">
                                {reviewItems}
                                <div>2</div>
                                <div>2</div>
                            </Slider> :
                            <Slider {...settingsForBig} className="review-slider">
                                {reviewItems}
                                <div>2</div>
                                <div>2</div>
                            </Slider>
                        }
                    </div>
                    <button className="more-btn">더 많은 후기 보기></button>
                </div>
            </div>
        </div>
    )
})

export default Review;