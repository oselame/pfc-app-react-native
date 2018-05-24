import { types } from '../actions/types';

const INITIAL_STATE = {
    aniversariantes: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_ANIVERSARIANTES:
            return {
                ...state, 
                aniversariantes: action.payload
            }        
        default: 
            return state;
    }
}
