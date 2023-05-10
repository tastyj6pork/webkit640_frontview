import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Board.css"

function ImageDisplay(props) {

    return(
        <div className="ImageDisplay" style={{width:'auto', height:'auto'}}>
            <Link to={`/gallerydetail/${props.id}`}>
                <img src={props.imageUrl} style={{width:'270px', height:'210px'}}/>
                <p
                style={{overflow:'hidden',
                textOverflow:'ellipsis'}}>
                    {props.title}
                </p>
            </Link>
        </div>
    )
}

export default ImageDisplay;