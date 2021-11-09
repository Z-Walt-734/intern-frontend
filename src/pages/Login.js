import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';


import { userActions } from '../actions';

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.user.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (email && password) {
            const { from } = { from: { pathname: "/redirect" } };
            dispatch(userActions.login(email, password, from));
        }
    }

    return (
        <div className='col-lg-8 offset-lg-2'>
            <h2>Login</h2>
            <form name='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        className={'form-control' + (submitted && !email ? ' is-invalid' : '')}
                    />
                    {submitted && !email && <div className='invalid-feedback'>email required</div>}
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
                    />
                    {submitted && !password && <div className='invalid-feedback'>Password required</div>}
                </div>
                <div className='form-group' >
                    <br />
                    <button variant='dark'>
                        {loggingIn && <span className='spinner-border spinner-border-sm mr-1'></span>}
                        Login
                    </button>


                    <Link to="/register" className="btn btn-link">
                        <Button variant='secondary'>
                            Register
                        </Button>
                    </Link>

                </div>
            </form >
        </div>
    )
}

export { Login };