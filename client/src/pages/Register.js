import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import Navbar from '../components/Navbar'
import { FaKey, FaUser } from 'react-icons/fa'
import notify from '../components/Notification'

const Register = () => {

    console.log(process.env.REACT_APP_HOST);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        console.log(username, email, password);

        const url = process.env.REACT_APP_HOST + "/auth/register"
        try {

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username : username, email: email, password: password}),
            });

            if(res.status === 201){
                notify("success","Registration Successful");
                navigate('/login')
            }
            else{
                notify("error", "Registration Failed");
            }
        }
        catch (err){
            console.log(err);
        }
    };

    return (
        <div>
        <Navbar />
        <BottomBar />
        <div className="max-w-sm mx-auto">
            <div className="mt-10 flex flex-col items-center justify-center">
            <h1 className="font-black text-[50px] text-center leading-11 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-black to-slate-400">
                Register
            </h1>
            <form
                className="flex flex-col space-y-4 min-w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-lg p-2 bg-inherit">
                        <FaUser className="text-slate-500"/>
                        <input
                            type="text"
                            placeholder="User name"
                            className='w-full outline-none'
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-lg p-2 bg-inherit">
                        <FaUser className="text-slate-500"/>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className='w-full outline-none'
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-lg p-2 bg-inherit">
                        <FaKey className="text-slate-500"/>
                        <input
                            type="password"
                            placeholder="Password"
                            className='w-full outline-none'
                            required
                        />
                    </div>
                </div>
                <button
                type="submit"
                className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                >
                Sign In with Email
                </button>
            </form>
            <Link to="/login" className="text-gray-500">
                Already have an account? Login here.
            </Link>
            </div>
        </div>
        </div>
    )
}

export default Register