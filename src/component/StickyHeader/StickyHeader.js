import React from 'react';
import { Link } from 'react-router-dom';
import "./StickyHeader.css"

function StickyHeader() {
    return (
        <div className="StickyHeader">
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to='/' className="navbar-brand">Logo</Link>
            </nav>
        </div>
    )
}

export default StickyHeader;