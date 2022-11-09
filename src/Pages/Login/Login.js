import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { auth, AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log("IN2")
                // Signed in 
                const user = userCredential.user;
                console.log({ x: user });
                // ...
            })
            .catch((error) => {
                // console.log("Y")
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }


    ///Google sign in
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error)
            )


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
                    <p className='text-center mt-4'>Also Sign in with :  <Link onClick={handleGoogleSignIn} className='text-center' ><button className='btn btn-primary'>Google</button></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;