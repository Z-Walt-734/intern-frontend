import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

const Register = () => {
    let { invite_id } = useParams();
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
        email: "",
        confirmationCode: invite_id,
    })
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (user.username && user.password && (user.confirmPassword === user.password) && user.first_name && user.last_name && user.email && user.confirmationCode) {
            dispatch(userActions.register(user));
        }
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Register</h2>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                {submitted && !user.username &&
                    <div className="invalid-feedback">Username is required</div>
                }
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                {submitted && !user.password &&
                    <div className="invalid-feedback">Password is required</div>
                }
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} className={'form-control' + (submitted && !user.confirmPassword ? ' is-invalid' : '')} />
                {submitted && !user.password &&
                    <div className="invalid-feedback">Password is required</div>
                }
            </div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="first_name" value={user.first_name} onChange={handleChange} className={'form-control' + (submitted && !user.first_name ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="last_name" value={user.last_name} onChange={handleChange} className={'form-control' + (submitted && !user.last_name ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Confirmation Code</label>
                    <input type="text" name="confirmationCode" value={user.confirmationCode} onChange={handleChange} className={'form-control' + (submitted && !user.confirmationCode ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <br />
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export { Register };