import { React, useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { call } from '../../../service/ApiService';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Review.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = forwardRef((props, ref) => {
    const [reviewData, setReviewData] = useState([]);
    const [reviewContent, setReviewContent] = useState("이건 가짜리뷰다. 어쩌다보니 가짜 리뷰를 블러 처리 하게 되었다. 그래도 디자인적으로는 완벽하다. 잡플래닛 최고~ 이제 이 위에 링크를 걸면 아주 완벽한 리뷰 슬라이더가 완성 된다. 보기 좋을 것 같다. 비록 메인 페이지에 리뷰 슬라이더가 있는 의미는 50%정도 사라졌지만 복잡한 건 절대 하기 싫으니까 어쩔 수 없다. 난..글렀다");
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

    useEffect(()=>{
        call("/main/review", "GET").then((res)=>{
            setReviewData(res);
        })
    },[])

    const reviewItems = (
        reviewData.map((item, i)=>(
            <div className="slid-item" key={i}>
                <div className="item-content">
                    <table>
                        <tbody>
                            <tr className="title-area">
                                <td className="title-td"><h2>{item.title}</h2></td>
                                <td><img src="#"/></td>
                            </tr>
                            <tr className="writer">
                                <td colspan="2">{item.writer}</td>
                            </tr>
                            <tr className="content">
                                <td colspan="2">
                                    <div className="review-content">
                                        {reviewContent}
                                    </div>
                                    <button className="review-link" 
                                    onClick={()=> document.location.href="/reviewdetail/"+item.id}>
                                        읽어 보기 〉
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ))
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
                            </Slider> :
                            <Slider {...settingsForBig} className="review-slider">
                                {reviewItems}
                            </Slider>
                        }
                    </div>
                    <button className="more-btn"
                        onClick={()=> document.location.href="/review"}>
                            더 많은 후기 보러 가기 〉
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Review;