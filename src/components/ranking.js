import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, List, ListItem } from 'react-native-elements';

import { general } from '../styles';
import LabelValue from './labelValue';

import { carregaRankingAtual, carregaRankingAnual } from '../actions/AppActions';

class Ranking extends Component {

    componentWillMount() {
        this.carregaRankingAtual();        
    }
    
    carregaRankingAtual() {
        this.props.carregaRankingAtual();
    }

    carregaRankingAnual() {
        this.props.carregaRankingAnual();
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
                    </View>
                </View>        
                <Divider style={{ backgroundColor: '#000' }} />
                </View>
            ))
        );
    }


    linkQuadrimestreAtual() {
        if (this.props.quadrimestreAnual) {
            return (
                <View >
                    <Text style={ [general.touchableHighlight, { fontSize: 16}] }>{this.props.cdQuadrimeste}º Quadrimestre</Text>
                </View> 
            )
        } else {
            return (
                <View >
                    <Text style={ [general.touchableHighlightPrincipal, { fontSize: 20}] }>{this.props.cdQuadrimeste}º Quadrimestre</Text>
                </View> 
            )
        }
    }

    linkQuadrimestreAnual() {
        if (this.props.quadrimestreAnual) {
            return (
                <View>
                    <Text style={ [general.touchableHighlightPrincipal, { fontSize: 20}] }>Anual</Text>
                </View> 
            )
        } else {
            return (
                <View>
                    <Text style={ [general.touchableHighlight, { fontSize: 16}] }>Anual</Text>
                </View>
            )
        }
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
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', 
                        flexDirection: 'row', paddingBottom: 15 }}>
                        <TouchableHighlight
                            onPress={() => this.carregaRankingAtual() }
                            underlayColor="#cacaca">
                            { this.linkQuadrimestreAtual() } 
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.carregaRankingAnual() }
                            underlayColor="#cacaca">
                            { this.linkQuadrimestreAnual() }
                        </TouchableHighlight>
                    </View>

                    <ScrollView>
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
    cdQuadrimeste: state.AppReducer.cdQuadrimestre,
    ranking: state.AppReducer.ranking,
    quadrimestreAnual: state.AppReducer.quadrimestreAnual,
    exibeEvolucao: state.AppReducer.exibeEvolucao
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaRankingAtual, carregaRankingAnual }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
