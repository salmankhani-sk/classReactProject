import React from "react";
import 'animate.css';
import ReactVisibilitySensor from "react-visibility-sensor";
import {Fade} from "react-awesome-reveal"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {ReactComponent as Mysvg}  from "../assets/services.svg"
import { FaBuildingShield } from "react-icons/fa6";
export default function About(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <section className="animate-pulse animate__fadeInUp transform transition duration-600 ease-in-out">
                    <div className="flex flex-col items-center">
                        <div>
                        <ReactVisibilitySensor>
                            <Fade direction="up">
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">More than <span className="text-blue-500">35+</span> Years we<br/> provide<span className="text-blue-500"> ITSolution</span></h2>
                                    <p className="mt-4">Far far away,behind the word mountains,far from the countries<br/> Vokalia and Consonantia</p>
                                </div>

                            </Fade>

                        </ReactVisibilitySensor>
                        </div>

                    </div>
                </section>
            </div>
            <div className="hidden md:block">
                <ReactVisibilitySensor>
                    <Fade direction="up">
                        <section className="flex items-center justify-center">
                            <div className="mx-20">
                                <LiaLaptopCodeSolid style={{fontSize:'10rem'}}/>
                                <h2 className="text-2xl">Web Development</h2>
                                <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                            <div >
                                <Mysvg style={{width:'400px',height:'400px'}}/>
                            </div>
                            <div className="mx-20">
                                <FaBuildingShield style={{fontSize:'8rem'}}/>
                                <h2 className="text-2xl">Server Security</h2>
                                <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                        </section>

                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div className="lg:hidden">
                <ReactVisibilitySensor>
                    <Fade direction="up">
                        <section className="flex flex-col items-center justify-center">
                            <div className="mx-20">
                                <LiaLaptopCodeSolid style={{fontSize:'10rem'}}/>
                                <h2 className="text-2xl">Web Development</h2>
                                <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                            <div >
                                <Mysvg style={{width:'400px',height:'400px'}}/>
                            </div>
                            <div className="mx-20">
                                <FaBuildingShield style={{fontSize:'8rem'}}/>
                                <h2 className="text-2xl">Server Security</h2>
                                <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                        </section>

                    </Fade>
                </ReactVisibilitySensor>
            </div>
        </div>
    )
}