import React from "react";
import {Fade} from "react-awesome-reveal"
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

        </div>
    )
}