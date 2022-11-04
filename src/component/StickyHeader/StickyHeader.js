import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./StickyHeader.css"

function StickyHeader() {

    return (
        <div className="StickyHeader">
            <nav className="navbar navbar-expand-sm navbar-light">
                <a href="/" className="navbar-brand">Logo</a>
            </nav>
        </div>
    )
}

export default StickyHeader;