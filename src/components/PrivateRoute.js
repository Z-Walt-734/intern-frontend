import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

function getCookie(name) {
    const value = Cookies.get('auth');
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            const cookieVal = Cookies.get('auth');
            // console.log("Cookie: ", cookieVal)
            if (cookieVal === '') {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };