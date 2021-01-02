import React from "react";
import {Link} from "react-router-dom";
const Footer=()=>{
    return(
        <div className="footerWrapper">
            <div className="logo">
                <h1>Technologies</h1>
                <p>&#169; copyright Technologies 2020</p>
            </div>
            <div className="div1">
                <h3>Navigation</h3>
                <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/about">About me </Link></li>
                            <li><Link to="/contact">Contact me</Link></li>
                            
                </ul>
            </div>
            <div className="div2">
                    <h3>Social Network</h3>
                    <ul>
                            <li><Link><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link><i className="fab fa-github"></i></Link></li>
                            <li><Link><i className="fab fa-twitter"></i></Link></li>
                            <li><Link><i className="fab fa-instagram"></i></Link></li>
                        </ul>
            </div>
            <div className="div3">
                <h3>Contact</h3>
                <br/>
                <a href="mailto:jitulteron9@gmail.com">jitulteron9@gmail.com <i class="far fa-envelope"></i></a>
            </div>
        </div>
        )
}

export default Footer;