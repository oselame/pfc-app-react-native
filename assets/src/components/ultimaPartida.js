import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar, Image, ActivityIndicator } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { general } from '../styles';
import LabelValue from './labelValue';
import ListaTimes from './listaTimes';

import { carregaUltimaPartida } from '../actions/AppActions';

class UltimaPartida extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.carregaUltimaPartida();
    }

    exibirDataPlacar() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <LabelValue label="Data" value={this.props.dtUltimapartida} />
                <LabelValue label="Placar" value={this.props.deResultado} />
            </View>
        )
    }

    exibirTimes() {
        return (
            <View style={{ flexDirection: 'row',  justifyContent: 'center' }}>
            <Image source={ require('../../assets/camiseta.png') } 
                    style={{ backgroundColor: '#ffff00', width:40, height: 40 }}/>
                <ListaTimes time="Time Amarelo" socios={this.props.sociostimea} alinhamento="flex-end"/>
                <View style={{width: 20}}></View>
                <ListaTimes time="Time Azul" socios={this.props.sociostimeb} alinhamento="flex-start"/>
                <Image source={ require('../../assets/camiseta.png') } 
                    style={{ backgroundColor: '#0000FF', width:40, height: 40 }}/>
            </View>
        )
    }

    exibirBolaCheia() {
        return (
            <View style={{ paddingTop: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ require('../../assets/bola-cheia.png') } 
                        style={{ height: 40, width: 40 }}/>
                    <Text style={{ fontSize: 20 }}>Bola Cheia</Text>                        
                </View>
                <View style={{ padding: 10 }}>
                    <HTMLView 
                        value={this.props.deBolacheia}
                    />
                </View>
            </View>
        )
    }

    exibirBolaMurcha() {
        return (
            <View style={{ paddingTop: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ require('../../assets/bola-murcha.png') } 
                        style={{ height: 40, width: 40 }}/>
                    <Text style={{ fontSize: 20 }}>Bola Murcha</Text>                        
                </View>
                <View style={{ padding: 10 }}>
                    <HTMLView 
                        value={this.props.deBolamurcha}
                    />
                </View>
            </View>
        )
    }

    render() {
        if (this.props.erroCarregarUltimaPartida == true) {
            return (
                <View style={{ flex: 1, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>A Api do site PeladaFC está em manutenção. Tente em alguns instantes.</Text>
                </View>
            )
        } else if (!this.props.dtUltimapartida) {
            return (
                <View style={{ flex: 1, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        } else {
            return ( 
                <ScrollView>
                <View style={ general.container }>
                    { this.exibirDataPlacar() } 
                    { this.exibirTimes() }
                    { this.exibirBolaCheia() }
                    { this.exibirBolaMurcha() }
                </View>
            </ScrollView>
            )
        }
    }
    
}

const mapStateToProps = state => ({
    dtUltimapartida: state.AppReducer.dtUltimapartida,
    deResultado: state.AppReducer.deResultado,
    deBolacheia: state.AppReducer.deBolacheia,
    deBolamurcha: state.AppReducer.deBolamurcha,
    sociostimea: state.AppReducer.sociostimea,
    sociostimeb: state.AppReducer.sociostimeb,
    erroCarregarUltimaPartida: state.AppReducer.erroCarregarUltimaPartida
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaUltimaPartida }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UltimaPartida);