import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function Home() {
    const user = useSelector(state => state.user.user);
    // const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getUser())

    }, []);

    function renderTitle() {
        if (user) {
            return <h1>Hi {user.username}!</h1>
        }
        else {
            return
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            {renderTitle()}

            <p>You're logged in!!</p>

            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { Home };