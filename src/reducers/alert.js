import { alertConstants } from '../constants';

export function alert(state = {}, action) {
    switch (action.type) {
        // Good
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        // Bad
        case alertConstants.ERROR:
            return {
                type: 'alert-error',
                message: action.message
            };
        // Ugly
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}