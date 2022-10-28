import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Review.css"

function Review() {
    return(
        <div className="Review">
            <div className="review-content w3-display-container">
                <div className="review-box w3-display-middle w3-center">
                    <h1>웹킷640과 함께한 학생들의 이야기를 들어보세요.</h1>
                    <div id="reviewCarousel" class="carousel slide" data-ride="carousel">
                        <ul class="carousel-indicators">
                            <li data-target="#reviewCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#reviewCarousel" data-slide-to="1"></li>
                            <li data-target="#reviewCarousel" data-slide-to="2"></li>
                        </ul>

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
}

export default Review;