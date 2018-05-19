import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, List, ListItem } from 'react-native-elements';

import { general } from '../styles';
import LabelValue from './labelValue';

import { carregaQuadrimestreAtual, carregaListaQuadrimestreAno, carregaRankingQuadrimestre } from '../actions/AppActions';

class Ranking extends Component {

    componentWillMount() {
        this.props.carregaQuadrimestreAtual();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nuAno !== this.props.nuAno) {
            console.log("componentWillReceiveProps", this.props.nuAno);        
            this.props.carregaListaQuadrimestreAno(nextProps.nuAno);
            this.props.carregaRankingQuadrimestre( nextProps.nuAno, nextProps.cdQuadrimestre);
        }
    }
    
    montaRanking() {
        return (
            this.props.ranking.map(rank => (
                <View key={rank.nuClassificacao} style={{ paddingBottom: 10  }}>
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
                <Divider style={{ backgroundColor: '#000' }} />
                </View>
            ))
        );
    }

    carregaQuadrimestreSelecionado(nuAno, cdQuadrimestre) {
        console.log("carregaQuadrimestreSelecionado", nuAno, cdQuadrimestre);
        this.props.carregaRankingQuadrimestre( nuAno, cdQuadrimestre);
    }


    montaLinks() {
        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', 
                    flexDirection: 'row', paddingBottom: 15 }}>
                    {
                        this.props.quadrimestres.map((quadr, i) => {

                            if (quadr.cdQuadrimestre === 4) {
                                if (quadr.cdQuadrimestre === this.props.cdQuadrimestre) {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => false }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16, fontWeight: 'bold'}]}>Anual</Text> 
                                        </TouchableHighlight>
                                    )
                                } else {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => this.carregaQuadrimestreSelecionado(this.props.nuAno, quadr.cdQuadrimestre) }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16}]}>Anual</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            } else {
                                if (quadr.cdQuadrimestre === this.props.cdQuadrimestre) {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => false }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16, fontWeight: 'bold'}]}>{quadr.cdQuadrimestre}º quadr.</Text>
                                        </TouchableHighlight>
                                    )
                                } else {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => this.carregaQuadrimestreSelecionado(this.props.nuAno, quadr.cdQuadrimestre) }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16}]}>{quadr.cdQuadrimestre}º quadr.</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            }
                        })
                    }
                </View>
            </View>
        )
    }
    

    render() {
        if (this.props.exibeEvolucao == true) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color='#ff0000'/>
                </View>
            )
        } else {
            return (                
                <View style={ general.container }>
                    { this.montaLinks() }

                    <ScrollView style={{paddingRight: 10}}>
                        <View>
                            { this.montaRanking() }                    
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}

const mapStateToProps = state => ({
    nuAno: state.AppReducer.nuAno,
    cdQuadrimestre: state.AppReducer.cdQuadrimestre,
    quadrimestres: state.AppReducer.quadrimestres,
    ranking: state.AppReducer.ranking,
    exibeEvolucao: state.AppReducer.exibeEvolucao
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaQuadrimestreAtual, carregaListaQuadrimestreAno, carregaRankingQuadrimestre }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
