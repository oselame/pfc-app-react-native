import { types } from '../actions/types';

const INITIAL_STATE = {
    galerias: [],
    cdGaleria: 0,
    fotosgaleria: [],
    exibeEvolucaoGaleria: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_GALERIAS: 
            return {
                ...state, 
                galerias: action.payload,
                exibeEvolucaoGaleria: false
            }
        case types.SELECIONAR_GALERIA: 
            return {
                ...state, cdGaleria: action.payload
            }
        case types.CARREGA_FOTOS_GALERIA:
            return {
                ...state, 
                cdGaleria: action.cdGaleria,
                fotosgaleria: action.payload
            }
        default: 
            return state;
    }
}
