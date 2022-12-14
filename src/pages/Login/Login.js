import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { logIn, loading, providerSignIn } = useContext(AuthContext);

    if (loading) {
        return <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const role = form.role.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }


    // ---------------------google sign in----------

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const role = 'buyer';
                const name = user.displayName;
                const email = user.email;
                console.log(user);
                saveUser(name, email, role);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(' https://assignment-12-server-car.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    // ------google sign in end--------


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to order, to add services and to give reviews.</p>
                    <img className='w-80 h-64' src="https://cdn-icons-png.flaticon.com/512/3233/3233049.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />



                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer/Seller</span>
                                </label>
                                <select name='role' className="select select-bordered w-full" defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Choose an option ...</option>
                                    <option value='buyer'>Buyer</option>
                                    <option value='seller'>Seller</option>
                                </select>
                            </div> */}

                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <p className='text-danger'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='p-5'>New to our website? <Link className='text-violet-500 font-bold' to='/register'>Create a new account</Link></p>
                    <p className='p-5 text-center'>Sign Up using
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mx-2">Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;