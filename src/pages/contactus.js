import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
export default function Contactus(){
    return(
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-pink-200 flex flex-col items-center justify-center">
                <div>
                    <div>
                        <div className="flex items-center justify-center mx-8">
                            <div>
                                <a href="https://www.google.com/maps/place//@33.7745676,73.2018521,14.26z?entry=ttu" target='_blank' rel="noreferrer">
                                <IoLocationOutline />
                                <h2>Address: <span>Islamabad Pakistan</span></h2>
                                </a>

                            </div>
                            <div><a href="https://wa.me/923175566089" target='_blank' rel="noreferrer" >
                            <FaPhoneAlt/>
                            <h2>+923175566089</h2>
                            </a>

                            </div>  
                            <div>
                                <a href="https://www.instagram.com/salmankhani_sk/" target="_blank" rel="noreferrer" >
                                <IoLogoInstagram/>
                                <h2>Instagram: <span>@salmankhani_sk</span></h2>

                                </a>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}