import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

function PageRedirect() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getUser())
    }, []);

    console.log(user);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
}

export { PageRedirect };