
import { EXAMPLE_REQUEST } from "../actions/auth";
import actions from '../actions/auth';
/* import settings from '../../../settings.json' */



const authMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    switch (action.type) {
        case EXAMPLE_REQUEST:
            let suma = getState().auth.suma + 1;
            dispatch(actions.auth.example(suma))
        break;
    }
}


export default authMiddleware;