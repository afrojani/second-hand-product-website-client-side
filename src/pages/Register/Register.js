import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, providerSignIn, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    // ---------------------google sign in----------

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    // ------google sign in end--------

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, password, role);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                handleUpdateUserProfile(name);
            })
            .catch(error => {
                console.log(error)
            });
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">

                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Login to order, to add services and to give reviews.</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1804/1804408.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer/Seller</span>
                            </label>
                            <select name='role' className="select select-bordered w-full" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Choose an option ...</option>
                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>
                            </select>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                    <p className='p-5 text-center'>Sign Up using
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mx-2">Google</button>
                    </p>
                    <p className='p-5 text-center'>Already have an account? Welcome Back!<br></br>
                        <Link className='text-violet-500 font-bold' to='/login'>Log in Here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;