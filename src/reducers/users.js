import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };

        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };

        case userConstants.GETALL_FAILURE:
            return {
                items: action.error
            };

        case userConstants.GETUSER_REQUEST:
            return {
                loading: true
            };

        case userConstants.GETUSER_SUCCESS:
            return {
                user: action.user
            };

        case userConstants.GETUSER_FAILURE:
            return {
                user: action.error
            };

        case userConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.items.map(doneUser =>
                    doneUser.id === action.id ? { ...doneUser, deleting: true } : doneUser
                )
            };

        case userConstants.DELETE_SUCCESS:
            return { items: state.items.filter(doneUser => doneUser.id !== action.id) };

        case userConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(doneUser => {
                    if (doneUser.id === action.id) {
                        const { deleting, ...userCopy } = doneUser;
                        return { ...userCopy, deleteError: action.error };
                    }
                    return doneUser;
                })
            };

        default:
            return state;
    }
}