import React from "react";
import 'animate.css';
import ReactVisibilitySensor from "react-visibility-sensor";
import {Fade} from "react-awesome-reveal"
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
        </div>
    )
}