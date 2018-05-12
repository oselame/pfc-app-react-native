import { types } from '../actions/types';

const INITIAL_STATE = {
    dtUltimapartida: '',
    deResultado: '',
    deBolamurcha: '',
    deBolacheia: '',
    sociostimea: [],
    sociostimeb: [],
    cdQuadrimestre: 1,
    ranking: [],
    quadrimestreAnual: false,
    exibeEvolucao: false,
    aniversariantes: [],
    galerias: [],
    cdGaleria: 2,
    fotosgaleria: [],
    erroCarregarUltimaPartida: false,
    jantares: []
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
                sociostimeb: action.payload.sociostimeb
              }
        case types.CARREGA_ULTIMA_PARTIDA_ERRO:
              return {
                ...state, 
                erroCarregarUltimaPartida: true
              }
        case types.CARREGA_RANKING_ATUAL: 
              return {
                  ...state, 
                  ranking: action.payload.data.socios, 
                  cdQuadrimestre: action.payload.data.cdQuadrimestre,
                  quadrimestreAnual: false, 
                  exibeEvolucao: false
              }
        case types.CARREGA_RANKING_ANUAL: 
            return {
                ...state, 
                ranking: action.payload.data.socios, 
                quadrimestreAnual: true, 
                exibeEvolucao: false
              }
        case types.MOSTRA_EVOLUCAO: 
              return {
                  ...state, exibeEvolucao: true
              }
        case types.CARREGA_ANIVERSARIANTES:
              return {
                  ...state, aniversariantes: action.payload
              }
        case types.CARREGA_GALERIAS: 
            return {
                ...state, galerias: action.payload
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
        case types.EXIBE_EVOLUCAO_RANKING: 
            return {
                ...state,
                exibeEvolucao: true
            }
        case types.CARREGA_JANTARES:
            return {
                ...state,
                jantares: action.payload
            }
        default: 
            return state;
    }
}
