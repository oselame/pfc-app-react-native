import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, View } from 'native-base';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnoQuadrimestre from './anoQuadrimestre';
import Quadrimestre from './quadrimestre';
import ExibeEvolucao from './exibeEvolucao';

import { carregaArtilheirosQuadrimestre, setaAnoQuadrimestreSelecionado  } from '../actions/ArtilheiroActions';

class Artilheiro extends Component {

    constructor(props) {
        super(props);
        this.onChangeAno = this.onChangeAno.bind(this);
        this.onClickQuadrimestre = this.onClickQuadrimestre.bind(this);
        this.onClickQuadrimestre(this.props.nuAnoAtual, this.props.cdQuadrimestreAtual);
    }

    componentWillMount() {
        this.props.carregaArtilheirosQuadrimestre(this.props.nuAno, this.props.cdQuadrimestre);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nuAno !== this.props.nuAno ||
            nextProps.cdQuadrimestre !== this.props.cdQuadrimestre) {
                this.props.carregaArtilheirosQuadrimestre(nextProps.nuAno, nextProps.cdQuadrimestre);
            }
    }

    onChangeAno(nuAno) {
        this.props.setaAnoQuadrimestreSelecionado(nuAno, this.props.cdQuadrimestre);
    }

    onClickQuadrimestre(nuAno, cdQuadrimestre) {
        this.props.setaAnoQuadrimestreSelecionado(nuAno, cdQuadrimestre);
    }



    montaRanking() {
        if (!this.props.artilheiros.length) {
             return null;
        } 
            return (
                this.props.artilheiros.map((rank) => (
                    <View key={rank.nuClassificacao} style={{ paddingTop: 10, borderBottomWidth: 1  }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ width: 30 }}>
                                    <Text style={{ fontSize: 10, textAlign: 'right' }}>Gols</Text>
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
                                    <Text style={{ textAlign: 'right' }}>{ rank.nuGols }</Text>
                                </View>
                            </View>
                        </View>        
                    </View>
                ))
            );
        

}

    render() {
        if (this.props.exibeEvolucaoArtilheiros) {
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
                                onChangeAno={ this.onChangeAno }
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

    nuAno: state.ArtilheiroReducer.nuAno,
    cdQuadrimestre: state.ArtilheiroReducer.cdQuadrimestre,
    artilheiros: state.ArtilheiroReducer.artilheiros,
    exibeEvolucaoArtilheiros: state.ArtilheiroReducer.exibeEvolucaoArtilheiros
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaArtilheirosQuadrimestre, setaAnoQuadrimestreSelecionado }, dispatch);

Artilheiro.propTypes = {
    nuAnoAtual: PropTypes.number.isRequired,
    cdQuadrimestreAtual: PropTypes.number.isRequired,
    nuAno: PropTypes.number.isRequired,
    cdQuadrimestre: PropTypes.number.isRequired,

    setaAnoQuadrimestreSelecionado: PropTypes.func.isRequired,
    carregaArtilheirosQuadrimestre: PropTypes.func.isRequired,
    artilheiros: PropTypes.array,
    quadrimestresAnos: PropTypes.array,
    exibeEvolucaoArtilheiros: PropTypes.bool
};
    
Artilheiro.defaultProps = {
    artilheiros: [],
    quadrimestresAnos: [],
    exibeEvolucaoArtilheiros: false
};

export default connect(mapStateToProps, mapDispatchToProps)(Artilheiro);
