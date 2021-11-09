import config from 'config';
import { authHeader } from '../helpers';
import Cookies from 'js-cookie';


export const userService = {
    register,
    login,
    logout,
    getAll,
    getById,
    getUser,
    update,
    delete: _delete
};

function handleResponse(res) {
    return res.text().then(text => {
        const data = text && JSON.parse(text);

        if (!res.ok) {
            if (res.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${config.apiUrl}/register/${user.confirmationCode}`, requestOptions).then(handleResponse);
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/login`, requestOptions).then(handleResponse)

}

function logout() {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    Cookies.set('auth', '');
    return fetch(`${config.apiUrl}/logout`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        cookie: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/user/${id}`, requestOptions).then(handleResponse);
}

function getUser() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include"
    };

    return fetch(`${config.apiUrl}/user/`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/user/${id}`, requestOptions).then(handleResponse);
}


