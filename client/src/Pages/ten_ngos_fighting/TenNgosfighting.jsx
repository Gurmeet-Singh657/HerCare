import React from 'react'
import "./TenNgosfighting.css"
import { ngosdata } from "./data.js"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const TenNgosfighting = () => {
    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }
    return (
        <>
            <Navbar />
            <div className="ngodetails">
                <div className="ngoheader">10 NGOs helping women to fight for their rights in India</div>
                <div className='Ngosdata'>
                    {ngosdata.map((option, index) => {
                        return (
                            <div className="ngocard" key={index}>
                                <div className='ngotitle'>{index + 1}.&nbsp;{option.title}</div>
                                <div className="ngoimg"><img src={option.img} className="ngoimg" /></div>
                                <div className="ngodesc">{option.desc}</div>
                                <div className="makebtnspace"></div>
                                <div className="ngobtn"><a href={option.link} target="_blank">Check Here...</a></div>
                            </div>
                        );
                    })}
                </div>
                <Footer />
            </div >
        </>
    )
}

export default TenNgosfighting