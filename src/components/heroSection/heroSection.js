import React from 'react'
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
                    <a style={{ color: 'white' }} href="/components/product-page/product-page.html"> <button className="btn-explore">Explore | &gt;</button></a>
                </section>
            </div>
        </>
    )
}

export { HeroSection }