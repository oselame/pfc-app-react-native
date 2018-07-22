import React, { Component } from 'react';
import {  Text } from 'react-native';
import { Container, Content, View } from 'native-base';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnoQuadrimestre from '../anoQuadrimestre';
import Quadrimestre from '../quadrimestre';
import ExibeEvolucao from '../exibeEvolucao';

import { setaAnoQuadrimestreSelecionado, carregaRankingQuadrimestre } from '../../actions/RankingActions';

class RankingScreen extends Component {

    constructor(props) {
        super(props);
        this.onChangeAno = this.onChangeAno.bind(this);
        this.onClickQuadrimestre = this.onClickQuadrimestre.bind(this);
        this.onClickQuadrimestre(this.props.nuAnoAtual, this.props.cdQuadrimestreAtual);
    }

    componentWillMount() {
        this.props.carregaRankingQuadrimestre(this.props.nuAno, this.props.cdQuadrimestre);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nuAno !== this.props.nuAno ||
            nextProps.cdQuadrimestre !== this.props.cdQuadrimestre) {
                this.props.carregaRankingQuadrimestre(nextProps.nuAno, nextProps.cdQuadrimestre);
        }
    }

    onChangeAno(nuAno) {
        this.props.setaAnoQuadrimestreSelecionado(nuAno, this.props.cdQuadrimestre);
    }

    onClickQuadrimestre(nuAno, cdQuadrimestre) {
        this.props.setaAnoQuadrimestreSelecionado(nuAno, cdQuadrimestre);
    }

    montaRanking() {
        return (
            this.props.ranking.map(rank => (
                <View key={rank.nuClassificacao} style={{ paddingTop: 10, borderBottomWidth: 1  }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ width: 30 }}>
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>P</Text>
                            </View>
                            <View style={{ width: 30 }}> 
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>J</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>V</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>E</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>D</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>                    
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ width: 30 }}>
                                <Text>{ rank.nuClassificacao }</Text>
                            </View>
                            <View>
                                <Text>{ rank.nmApelido }</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuPontos }</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuJogos }</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuVitorias }</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuEmpates }</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuDerrotas }</Text>
                            </View>
                        </View>
                    </View> 
                </View>
            ))
        );
}

    render() {
        if (this.props.exibeEvolucaoRanking) {
            return (
                <ExibeEvolucao />
            )
        } 
        return (
            <Container>
                <Content>
                    <View style={{ backgroundColor: '#bcbcbc', paddingBottom: 10 }}>
                        <AnoQuadrimestre nuAno={this.props.nuAno} 
                            quadrimestresAnos={this.props.quadrimestresAnos}
                            onChangeAno={this.onChangeAno}
                        />

                        <Quadrimestre 
                            nuAno={this.props.nuAno} 
                            cdQuadrimestre={this.props.cdQuadrimestre} 
                            quadrimestresAnos={this.props.quadrimestresAnos}
                            selecionaQuadrimestre={ this.onClickQuadrimestre } />
                    </View>

                    <View style={{ marginLeft:20, marginRight:20  }}>
                        { this.montaRanking() }                    
                    </View>
                </Content>
            </Container>
        )
        
    }
}

const mapStateToProps = state => ({
    nuAnoAtual: state.AppReducer.nuAnoAtual,
    cdQuadrimestreAtual: state.AppReducer.cdQuadrimestreAtual,
    quadrimestresAnos: state.QuadrimestreReducer.quadrimestresAnos,
    

    nuAno: state.RankingReducer.nuAno,
    cdQuadrimestre: state.RankingReducer.cdQuadrimestre,
    ranking: state.RankingReducer.ranking,
    exibeEvolucaoRanking: state.RankingReducer.exibeEvolucaoRanking
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { setaAnoQuadrimestreSelecionado, carregaRankingQuadrimestre }, dispatch);



    RankingScreen.propTypes = {
    nuAnoAtual: PropTypes.number.isRequired,
    cdQuadrimestreAtual: PropTypes.number.isRequired,
    nuAno: PropTypes.number.isRequired,
    cdQuadrimestre: PropTypes.number.isRequired,

    setaAnoQuadrimestreSelecionado: PropTypes.func.isRequired,
    carregaRankingQuadrimestre: PropTypes.func.isRequired,
    exibeEvolucaoRanking: PropTypes.bool.isRequired,
    ranking: PropTypes.array,
    quadrimestresAnos: PropTypes.array
};
    
RankingScreen.defaultProps = {
    ranking: [],
    quadrimestresAnos: []
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);
