import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, List, ListItem } from 'react-native-elements';

import { general } from '../styles';
import LabelValue from './labelValue';
import Quadrimestre from './quadrimestre';
import Evolucao from './evolucao';

import { carregaRankingQuadrimestre } from '../actions/RankingActions';

class Ranking extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

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
    }


    montaLinks() {
        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', 
                    flexDirection: 'row', paddingBottom: 15 }}>
                    {
                        this.props.quadrimestres.map((quadr, i) => {

                            if (quadr.cdQuadrimestre === 4) {
                                if (quadr.cdQuadrimestre === this.state.cdQuadrimestre) {
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
                                            onPress={() => this.carregaQuadrimestreSelecionado(this.state.nuAno, quadr.cdQuadrimestre) }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16}]}>Anual</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            } else {
                                if (quadr.cdQuadrimestre === this.state.cdQuadrimestre) {
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
                                            onPress={() => this.carregaQuadrimestreSelecionado(this.state.nuAno, quadr.cdQuadrimestre) }
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
        if (!!this.props.exibeEvolucaoRanking) {
            return (
                <Evolucao exibeEvolucao={this.props.exibeEvolucaoRanking} />
            )
        } else {
            return (
                <View>
                    <Text>ano: {this.props.nuAnoAtual} </Text>
                    <Text>qua: {this.props.cdQuadrimestreAtual} </Text>
                    <Quadrimestre 
                        nuAno={this.props.nuAnoAtual} 
                        cdQuadrimestre={this.props.cdQuadrimestreAtual} 
                    />
                </View>
            )
        }
        /*
        } else {
            return (  
                <View style={ general.container }>
                    <Text>{this.props.nuAnoAtual}</Text>
                                  
                    { 
                    
                <Quadrimestre nuAno={this.props.nuAnoAtual} cdQuadrimestre={this.props.cdQuadrimestreAtual}/>
                this.montaLinks()  }

                    <ScrollView style={{paddingRight: 10}}>
                        <View>
                            {this.montaRanking() }
                        </View>
                    </ScrollView>
                </View>
            );
        }
        */
    }
}

const mapStateToProps = state => ({
    nuAnoAtual: state.AppReducer.nuAnoAtual,
    cdQuadrimestreAtual: state.AppReducer.cdQuadrimestreAtual,
    exibeEvolucaoRanking: state.RankingReducer.exibeEvolucaoRanking
    // ranking: state.RankingReducer.ranking,
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaRankingQuadrimestre }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
