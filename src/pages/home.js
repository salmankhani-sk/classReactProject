import React from "react";
import 'animate.css'
import imag from '../assets/work-4.jpg';
import { MdElectricBolt } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { FaRedhat } from "react-icons/fa6";
function Home(){
    return(
        <div>
            <div className="h-screen bg-cover" style={{backgroundImage:`url(${imag})`, height:'600px'}}> 
                <div className="text-white container flex ">
                    <div className="h-screen items-center flex " data-scrollax-parent="true" style={{height:'500px'}}> 
                        <div className="col-span-8 mt-5 pt-5" data-scrollax="properties:{traslateY:'75%'}">
                            <div className="flex flex-col px-10">
                                <div className="col-span-7 ">
                                    <p className="mb-4 pl-5 font-bold text-xl">A small river named Duden flows by their place and supplies</p>
                                </div>
                                <div className="pl-5 mb-4">
                                    <h1 className="mb-4 font-extrabold text-5xl ">Experienced for Every kinds of ITSolution</h1>
                                </div>
                                <div className="mb-4 pl-5 ">
                                    <button type="button" className="px-10 btn py-4 w-42 bg-blue-900 font-bold hover:bg-blue-700 transition-colors duration-150 ease-in-out">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto ">
                        <section className="into hidden md:block">
                            <div className="flex justify-end">
                                <div className="services-1">
                                    <div className="animate__fadeInUp animate__animated ">
                                        <div className="my-56 grid grid-cols-3 gap-4 items-stretch">
                                            <div className="media-body cursor-default bg-blue-900 w-50 h-100  border-2 border-transparent items-center flex flex-col justify-center hover:text-yellow-500 hover:border-yellow-500 duration-500 ease-in-out">
                                                <MdElectricBolt className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold text-xl mx-5 my-5  ">Information Technology Consultancy</h3>
                                            </div>
                                            <div className="media-body cursor-default w-50 h-100 bg-blue-900 w-30 h-70  border-2 border-transparent items-center flex flex-col justify-center hover:text-yellow-500 hover:border-yellow-500 duration-500 ease-in-out ">
                                                <TbBulbFilled className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold  text-xl mx-5 my-5  ">Product Design Strategy</h3>
                                            </div>
                                            <div className="media-body cursor-default w-50 h-100 bg-blue-900 w-30 h-70 border-2 border-transparent items-center flex flex-col justify-center hover:text-yellow-500 hover:border-yellow-500 duration-500 ease-in-out">
                                                <FaRedhat className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold text-xl mx-5 my-5  ">Cyber Security & Web Development</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section className="into lg:hidden ">
                            <div className="flex  justify-end">
                                <div className="services-1">
                                    <div className="animate__fadeInUp animate__animated ">
                                        <div className="flex flex-col gap-x-6  mx-12 items-stretch">
                                            <div className="media-body cursor-default bg-blue-900 w-50 h-100  border-2 border-transparent items-center flex flex-col justify-center text-yellow-500 border-yellow-500 duration-500 ease-in-out">
                                                <MdElectricBolt className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold text-xl mx-5 my-5  ">Information Technology Consultancy</h3>
                                            </div>
                                            <div className="media-body cursor-default w-50 h-100 bg-blue-900 w-30 h-70  border-2 border-transparent items-center flex flex-col justify-center text-yellow-500 border-yellow-500 duration-500 ease-in-out ">
                                                <TbBulbFilled className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold  text-xl mx-5 my-5  ">Product Design Strategy</h3>
                                            </div>
                                            <div className="media-body cursor-default w-50 h-100 bg-blue-900 w-30 h-70 border-2 border-transparent items-center flex flex-col justify-center text-yellow-500 border-yellow-500 duration-500 ease-in-out">
                                                <FaRedhat className="text-6xl font-bold"/>
                                                <h3 className="heading font-bold text-xl mx-5 my-5  ">Cyber Security & Web Development</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                       
        </div>
    )
}

export default Home;
