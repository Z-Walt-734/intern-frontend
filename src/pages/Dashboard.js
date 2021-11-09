import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { userActions } from '../actions';


function Dashboard() {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.getUser());
    // }, []);

    let username = userData.username;
    console.log(username)


    return (
        <div>

            {/* <button className="btn btn-primary" onClick={handleSubmit}>
                Show me
            </button> */}
        </div>
    );
}

export { Dashboard };