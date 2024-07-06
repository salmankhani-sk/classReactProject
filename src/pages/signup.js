import React from "react";
import {Link} from 'react-router-dom';
export default function Signup(){
    return(
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 shadow-xl rounded-xl w-80">
                <h1 className="text-2xl font-bold mb-10 text-center ">Sign Up</h1>
                <form>
                    <input type="text" placeholder="Username"  className="mb-5 w-full px-3  py-2 border border-gray-300 rounded-md"/>
                    <input type="password" placeholder="Password" className="mb-5 w-full px-3  py-2 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Email" className="mb-5 w-full px-3  py-2 border border-gray-300 rounded-md" />
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/signin" className="text-blue-600 hover:underline mt-5">Sign In</Link> </p>
            </div>
        </div>
    )
}