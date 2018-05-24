import { types } from '../actions/types';

const INITIAL_STATE = {
    quadrimestresAnos: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_LISTA_QUADRIMESTRES_POR_ANO:
            return {
                ...state,
                quadrimestresAnos: action.payload
            }
        default: 
            return state;
    }
}
