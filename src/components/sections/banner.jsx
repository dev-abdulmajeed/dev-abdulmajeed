import React from 'react'
import SlideUp from '../animations/slideUp'

const Banner = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12">
                            <SlideUp>
                                <div className="hero-content rmb-25 text-center">
                                    <h1>I'm <span>Abdul</span> Majeed</h1>
                                    <div className="job">
                                        <span>App Developer</span><span>Webflow Developer</span>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner