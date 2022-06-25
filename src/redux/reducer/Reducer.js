import { VIEW } from "../actions/Variables"


const initialState = {
    
}

export default function root(state = initialState, action){
    switch (action.type) {
        case VIEW:
        return {
            
        }
        default:
        return {...state}
    }
}