import { EXAMPLE } from "../actions/auth";


const initialState = {
    suma : 0
}



const auth = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE:
            return { ...state }
    }
}


export default auth;