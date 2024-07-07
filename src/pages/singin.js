import React from 'react';

function SignIn() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-8 text-center">Sign In</h2>
                <form>
                    <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" type="email" placeholder="Email" required />
                    <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" type="password" placeholder="Password" required />
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;