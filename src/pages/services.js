import React from "react";
import {Fade} from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDataThresholding } from "react-icons/md";
import { FaBuildingLock } from "react-icons/fa6";

import { MdDesignServices } from "react-icons/md";
import ReactVisibilitySensor from "react-visibility-sensor";
export default function Services(){
    return(
        <div>
            <div className="flex justify-center items-center h-screen">
                <ReactVisibilitySensor>
                    <Fade direction="up">
                        <h1 className="text-5xl  font-extrabold">Our Exlusive <span className="text-blue-500">ITSolution</span><br/> Services</h1>
                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div>
                <div className="flex justify-center items-center h-screen mx-28">
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-700 ease-in-out transform hover:bg-yellow-950 hover:w-80 hover:h-72">
                                <FaLaptopCode className="text-6xl"/>
                                <h1 className="text-xl font-semibold">Web development</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>

                            </div>
                            
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-700 ease-in-out transform hover:bg-yellow-950 hover:w-80 hover:h-72">
                                <MdOutlineDataThresholding className="text-6xl"/>
                                <h1 className="text-xl font-semibold">DataBase Analysis</h1>
                                <p>Transforming Raw Data into Strategic Insight</p>

                            </div>
                            
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-700 ease-in-out transform hover:bg-yellow-950 hover:w-80 hover:h-72">
                                <FaBuildingLock className="text-6xl"/>
                                <h1 className="text-xl font-semibold">Server Security</h1>
                                <p>Implement essential HTTP security headers to protect against common attacks.</p>

                            </div>
                            
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-700 ease-in-out transform hover:bg-yellow-950 hover:w-80 hover:h-72">
                                <MdDesignServices  className="text-6xl"/>
                                <h1 className="text-xl font-semibold">UX/UI Strategy</h1>
                                <p>Bridging User Needs and Business Goals</p>

                            </div>
                            
                        </Fade>
                    </ReactVisibilitySensor>
                </div>
            </div>

        </div>
    )
}