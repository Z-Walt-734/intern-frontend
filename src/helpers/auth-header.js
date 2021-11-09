import Cookies from 'js-cookie'

export function authHeader() {
    let user = Cookies.get('auth');

    if (user) {
        return { 'Authorization': 'Bearer' + user.token };
    } else {
        return {};
    }
}

