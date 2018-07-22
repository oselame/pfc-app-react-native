import { types } from '../actions/types';

const INITIAL_STATE = {
    dtUltimapartida: '',
    deResultado: '',
    deBolamurcha: '',
    deBolacheia: '',
    sociostimea: [],
    sociostimeb: [],
    erroCarregarUltimaPartida: false,
    exibeEvolucaoUltimaPartida: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_ULTIMA_PARTIDA: 
            return { ...state, 
                dtUltimapartida: action.payload.dtPartida,
                deResultado: action.payload.deResultado,
                deBolacheia: action.payload.deBolacheia,
                deBolamurcha: action.payload.deBolamurcha,
                sociostimea: action.payload.sociostimea,
                sociostimeb: action.payload.sociostimeb,
                exibeEvolucaoUltimaPartida: false
              }
        case types.CARREGA_ULTIMA_PARTIDA_ERRO:
              return {
                ...state, 
                erroCarregarUltimaPartida: true,
                exibeEvolucaoUltimaPartida: false
              }
        default: 
            return state;
    }
}
