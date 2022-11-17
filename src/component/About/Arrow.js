import { React, useEffect, useState, useMemo, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./Arrow.css"

function Arrow (props){
    return (
        <div className="Arrow w3-center">
            <button onClick={props.onclick} className="arrow w3-center">{props.shape}</button>
        </div>
    )
}

export default Arrow;