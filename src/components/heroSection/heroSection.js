import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../../images/landing-img2.jpg"


function HeroSection() {
    return (
        <>
            <div>
                <section className="landing-page">
                    <div className="img-landing-page"><img src={img1} alt="landing page" /></div>
                </section>
                <section className="landing-text">
                    <h2>Read <br />The Best <br /> Books</h2>
                    <p>Learning is the way <br /> to get succeed.<br />Grow more with the books.</p>
                    <div style={{ color: 'white' }} >
                        <Link to="/ProductPage">
                             <button className="btn-explore">Explore <i className="fas fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export { HeroSection }