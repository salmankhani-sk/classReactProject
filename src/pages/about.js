import React from "react";
import 'animate.css';
import ReactVisibilitySensor from "react-visibility-sensor";
import {Fade} from "react-awesome-reveal"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {ReactComponent as Mysvg}  from "../assets/services.svg"
import Wimage from '../assets/work.jpg'
import { FaBuildingShield } from "react-icons/fa6";
import CountUp from "react-countup";
export default function About(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <section className="animate-pulse  transform transition duration-600 ease-in-out">
                    <div className="flex flex-col items-center">
                        <div>
                        <ReactVisibilitySensor>
                            <Fade direction="up">
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">More than <span className="text-blue-500">2+</span> Years we<br/> provide<span className="text-blue-500"> ITSolution</span></h2>
                                    <p className="mt-4">Empowering businesses with innovative IT solutions that<br/> transcend borders and drive successEmpowering businesses<br/> with innovative IT solutions that transcend borders and drive success</p>
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
                                <p className="mt-2 text-gray-600 font-normal">Our expert team crafts robust and user-friendly websites, ensuring seamless functionality and captivating design. From front-end aesthetics to back-end functionality, we deliver tailored solutions that drive business growth.</p>
                            </div>
                            <div >
                                <Mysvg style={{width:'400px',height:'400px'}}/>
                            </div>
                            <div className="mx-20">
                                <FaBuildingShield style={{fontSize:'8rem'}}/>
                                <h2 className="text-2xl">Server Security</h2>
                                <p className="mt-2 text-gray-600 font-normal">Our robust server security solutions stand as an impenetrable fortress, safeguarding your digital assets against threats from distant lands</p>
                            </div>
                        </section>

                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div className="lg:hidden">
                <ReactVisibilitySensor>
                    <Fade direction="">
                        <section className="flex flex-col items-center justify-center">
                            <div className="mx-20">
                                <LiaLaptopCodeSolid style={{fontSize:'10rem'}}/>
                                <h2 className="text-2xl">Web Development</h2>
                                <p className="mt-2 text-gray-600 font-normal">Our expert team crafts robust and user-friendly websites, ensuring seamless functionality and captivating design.</p>
                            </div>
                            <div >
                                <Mysvg style={{width:'400px',height:'400px'}}/>
                            </div>
                            <div className="mx-20">
                                <FaBuildingShield style={{fontSize:'8rem'}}/>
                                <h2 className="text-2xl">Server Security</h2>
                                <p className="mt-2 text-gray-600 font-normal">Our robust server security solutions stand as an impenetrable fortress, safeguarding your digital assets against threats from distant lands</p>
                            </div>
                        </section>

                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div className="lg:hidden">
            <div className="flex justify-center items-center">
                            
                            <div className="bg-cover bg-center h-[500px] w-[500px] bg-blue-700">
                                <div className="mt-16 mx-14">
                                    
                                    <h1 className="font-bold text-4xl text-white">Consult us here in <br/> <span className="text-yellow-500">IT Solution</span></h1>
                                    <p className="text-white mt-4">Guiding businesses toward success, our expert consultants bridge the gap between distant challenges and practical solutions.</p>
                                    
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 750 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Project Complete</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 589 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Happy Client</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 478 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Buisiness Partners</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 780 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> IT Consultant</h6>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                        <div className="hidden md:block">
                        <div className="flex justify-center items-center ">
                            <div style={{background:`url(${Wimage})`}} className=" bg-no-repeat bg-cover bg-center h-[500px] w-[500px] ">
                                
                            </div>
                            <div className="bg-cover bg-center h-[500px] w-[500px] bg-blue-700">
                                <div className="mt-16 mx-14">
                                    
                                    <h1 className="font-bold text-4xl text-white">Consult us here in <br/> <span className="text-yellow-500">IT Solution</span></h1>
                                    <p className="text-white mt-4">Guiding businesses toward success, our expert consultants bridge the gap between distant challenges and practical solutions.</p>
                                    
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 750 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Project Complete</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 589 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Happy Client</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 478 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> Buisiness Partners</h6>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-white font-bold text-3xl mx-14">
                                        <ReactVisibilitySensor>
                                            {({isVisible})=>(
                                                <CountUp end={isVisible ? 780 : 0} />
                                            )}
                                        </ReactVisibilitySensor>
                                        </h2>
                                        <h6 className="text-white mx-14"> IT Consultant</h6>
                                    </div>
                                </div>
                            </div>
                        </div></div>
 
        </div>
    )
}