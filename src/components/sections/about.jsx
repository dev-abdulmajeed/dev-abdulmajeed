import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiMailAddFill, RiMailFill } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.png"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Abdul Majeed</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="#"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="#"><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/dev-abdulmajeed52/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/dev-abdulmajeed52"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Abdul Majeed, <span>App Developer</span> and UX / UI Designer
                                    Based in Pakistan.
                                </h2>

                                {/* BUTTON ROW */}
                                <div className="d-flex gap-3 flex-wrap mt-3">
                                    <a
                                        href="../../assets/images/resume/AbdulMajeed_resume.pdf"
                                        className="theme-btn d-flex align-items-center gap-2"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download CV <RiDownloadLine size={16} />
                                    </a>
                                    <a
                                        href="mailto:ask@abdulmajeed.dev"
                                        className="theme-btn d-flex align-items-center gap-2"
                                    >
                                        Email <RiMailFill size={16} />
                                    </a>
                                </div>

                            </SlideUp>

                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> App Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Product Design</li>

                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About