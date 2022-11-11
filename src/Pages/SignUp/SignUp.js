import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';





const SignUp = () => {
    const { createUser } = useContext(AuthContex)

    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignup = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Please should be at least 6 characters');
            return
        }
        setPasswordError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message);
            });

    }

    // const handleEmailBlur = event => {
    //     console.log(event.target.value)
    // }

    // const handlePasswordBlur = event => {
    //     console.log(event.target.value)
    // }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <p className="py-6">Please Sign Up.</p>
                    <p>From home cleaning to finding a handyman near me, Handy is your source for home services. Instantly book competitively priced home services and get quotes ...</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center text-red-600'>{passwordError}</p> <br />
                    {success && <p className='text-green-600 text-center'>User Create Succeccfully.</p>}
                    <p className='text-center'>Already have an account! <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;