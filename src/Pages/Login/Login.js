import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src='https://img.freepik.com/free-vector/man-delivery-package-white-background_1308-46613.jpg?w=740&t=st=1667891672~exp=1667892272~hmac=3239182cd19ba5a156a26068bd5839f47475b0a30f66d25e46087959f582be5c' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-dark" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New Member ???  <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;