import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <div className="Footer">
            <div className="footer-content w3-display-container">
                <div className="footer-box">
                    <hr />
                    <div className="footer-contents">
                        <footer class="w3-container w3-padding-32">
                            <div class="w3-row-padding">
                                <div class="w3-third" style={{marginRight:"30px"}}>
                                <h3>FOOTER</h3>
                                <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
                                </div>
                            
                                <div class="w3-third">
                                <h3>LINKS</h3>
                                <ul class="w3-ul">
                                    <li class="w3-padding-16">
                                    <span class="w3-large">Lorem</span><br/>
                                    <span>Sed mattis nunc</span>
                                    </li>
                                    <li class="w3-padding-16">
                                    <span class="w3-large">Ipsum</span><br/>
                                    <span>Praes tinci sed</span>
                                    </li> 
                                </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;