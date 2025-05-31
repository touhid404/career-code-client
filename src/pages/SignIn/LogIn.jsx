import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/lottie/register.json';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const LogIn = () => {
     const { logIn} = use(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('Email:', email, 'Password:', password);
        logIn(email, password)
            .then(result => {
                console.log('User registered:', result.user);
                form.reset();
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <Lottie animationData={registerLottie} style={{width: 200}}></Lottie>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
      <h1 className="text-3xl font-bold my-2">Login now!</h1>

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;