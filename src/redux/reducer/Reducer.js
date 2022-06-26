import { SUMA } from "../actions/Variables"


const initialState = {
    count: 0,
}

export default function root(state = initialState, action){
    switch (action.type) {
        case SUMA:
        return {
            ...state,
            count: state.count + 1
        }
        default:
        return {...state}
    }
}