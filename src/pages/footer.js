import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer(){
    return(
        <div className="bg-gray-900 h-96   text-white flex items-center justify-between">
            <div className="mx-10">
                <h3 className="font-bold text-2xl text-blue-700"><span className="text-yellow-600  text-2xl">Seka</span> Solution </h3>
                <p className="">Transforming ideas into<br/> innovative software solutions.<br/> Located far from the ordinary,<br/> near the heart of your digital needs.</p>
                <div className="flex text-2xl ">
                <a href="www.twiter.com"><FaSquareXTwitter className="mx-2 transition-all duration-500 ease-in-out transform hover:text-4xl "/></a>
                <a href= "https://www.facebook.com/profile.php?id=100015114820222" target="_blank" rel="noreferrer"> <FaFacebook className="mx-2 transition-all duration-500 ease-in-out transform hover:text-4xl" /></a>
                <a href="https://www.instagram.com/salmankhani_sk/"> <FaInstagram className="mx-2 transition-all duration-500 ease-in-out transform hover:text-4xl"/></a></div>
            </div>
            <div>
                <h3 className="font-semibold text-2xl">Explore</h3>
                <h6>About</h6>
                <h6>Contact</h6>
                <h6>What we Do</h6>
                <h6>Plans&Pricing</h6>
                <h6>Refund Policy</h6>
                <h6>Call Us</h6>
                

            </div>
            <div className="mx-10">
            <h3 className="font-semibold text-2xl"> Legal</h3>
                <h6>Join Us</h6>
                <h6>Blog</h6>
                <h6>Privacy & Policy</h6>
                <h6>Terms & Conditions</h6>
                <h6>Cateers</h6>
                <h6>Contact</h6>

            </div>
            
        </div>
    )
}
export default Footer