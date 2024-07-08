import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
export default function Contactus(){
    return(
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-pink-200 flex flex-col items-center justify-center">
                <div>
                    <div className="hidden md:block ">
                        <div className="flex items-center justify-center mx-8">
                        <div className="flex items-center justify-center mx-8">
                            <div className="mx-12 flex items-center justify-center flex-col">
                                <a href="https://www.google.com/maps/place//@33.7745676,73.2018521,14.26z?entry=ttu" target='_blank' rel="noreferrer">
                                <IoLocationOutline className="text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-gray-500 hover:w-16 hover:h-16 hover:text-4xl"/>
                                <h2> <span>Islamabad Pakistan</span></h2>
                                </a>

                            </div>
                            <div className="mx-12 flex items-center justify-center flex-col"><a href="https://wa.me/923175566089" target='_blank' rel="noreferrer" >
                            <FaPhoneAlt className="text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-green-600 hover:w-16 hover:h-16 hover:text-4xl"/>
                            <h2>+923175566089</h2>
                            </a>

                            </div>  
                            <div className="mx-12 flex items-center justify-center flex-col">
                                <a href="https://www.instagram.com/salmankhani_sk/" target="_blank" rel="noreferrer" >
                                <IoLogoInstagram className="text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-pink-400 hover:w-16 hover:h-16 hover:text-4xl"/>
                                <h2><span>salmankhani_sk</span></h2>

                                </a>
                            </div>
                        </div>
                        
                    </div></div>
                    <div className="lg:hidden flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center my-16">
                            <div className="flex items-center justify-center flex-col">
                                <a href="https://www.google.com/maps/place//@33.7745676,73.2018521,14.26z?entry=ttu" target='_blank' rel="noreferrer">
                                <IoLocationOutline className="text-xl font-semibold" />
                                <h2> <span>Islamabad Pakistan</span></h2>
                                </a>

                            </div>
                            <div className="flex items-center justify-center flex-col"><a href="https://wa.me/923175566089" target='_blank' rel="noreferrer" >
                            <FaPhoneAlt className="text-xl font-semibold"/>
                            <h2>+923175566089</h2>
                            </a>

                            </div>  
                            <div className="flex items-center justify-center flex-col">
                                <a href="https://www.instagram.com/salmankhani_sk/" target="_blank" rel="noreferrer" >
                                <IoLogoInstagram className="text-xl font-semibold"/>
                                <h2><span>salmankhani_sk</span></h2>

                                </a>
                            </div>
                        </div>
                        
                    </div>
                   
                        <div className="flex items-center justify-center h-screen">
                            <div className="bg-white p-8 rounded shadow-md w-80">
                                <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
                                <form>
                                    <input type="text" placeholder="Name" required className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" />
                                    <input type="email" placeholder="Email" required  className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                    <input type="password" placeholder="Password" required className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                    <textarea placeholder="Message" required className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                    <button type="submit" className="w-full py-2 px-2 bg-blue-600 text-white rounded-md">Send Message</button>
                                </form>
                            </div>    
                        </div>
                </div>
            </div>
        </div>
    )
}