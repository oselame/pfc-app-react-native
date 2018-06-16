import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
import HTMLView from 'react-native-htmlview';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExibeEvolucao from './exibeEvolucao';

import LabelValue from './labelValue';
import ListaTimes from './listaTimes';

import { carregaUltimaPartida } from '../actions/UltimaPartidaActions';

class UltimaPartida extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.carregaUltimaPartida();
    }

    renderEvolucao() {
        if (this.props.exibeEvolucaoUltimaPartida == true) {
            return (
                <View>
                    <ExibeEvolucao />
                </View>
            )
        } else {
            return null;
        }
    }

    exibirDataPlacar() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', 
                padding: 10 }}>
                <LabelValue label="Data" value={this.props.dtUltimapartida} />
                <LabelValue label="Placar" value={this.props.deResultado} />
            </View>
        )
    }

    exibirTimes() {
        return (
            <View style={{ flexDirection: 'row',  justifyContent: 'center' }}>
                <View style={{ paddingRight: 5 }}>
                    <ListaTimes time="Time Amarelo" socios={this.props.sociostimea} 
                        alinhamento="flex-end"
                        corCamisa="#ffff00"/>
                </View>
                <View style={{ paddingLeft: 5 }}>
                    <ListaTimes time="Time Azul" socios={this.props.sociostimeb} 
                        alinhamento="flex-start"
                        corCamisa="#0000FF"/>
                </View>
            </View>
        )
    }

    exibirBolaCheia() {
        return (
            <View style={{ paddingHorizontal: 10, paddingVertical:10 }}>
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
            <View style={{ paddingHorizontal: 10, paddingVertical:10 }}>
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

    renderUltimaPartida() {
        if (this.props.erroCarregarUltimaPartida != true) {
            return (
                <View>
                    { this.exibirDataPlacar() } 
                    { this.exibirTimes() }
                    { this.exibirBolaCheia() }
                    { this.exibirBolaMurcha() }
                </View>
            )
        } else {
            return null;
        }
    }

    renderErroUltimaPartida() {
        if (this.props.erroCarregarUltimaPartida == true) {
            return (
                <Container>
                    <Content enableResetScrollToCoords={false} 
                        contentContainerStyle={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                        <View>
                            <Text>Não foi possível carregar os dados da Última Partida</Text>
                            <Text>Tente novamente dentro de alguns instantantes.</Text>
                        </View>
                    </Content>
                </Container>
            )
        } else {
            return null;
        }
    }

    render() {
        return ( 
            <Container>
                <Content>
                    { this.renderErroUltimaPartida() }
                    { this.renderEvolucao() }
                    { this.renderUltimaPartida() }
                </Content>
            </Container>
        )
    }
    
}

const mapStateToProps = state => ({
    dtUltimapartida: state.UltimaPartidaReducer.dtUltimapartida,
    deResultado: state.UltimaPartidaReducer.deResultado,
    deBolacheia: state.UltimaPartidaReducer.deBolacheia,
    deBolamurcha: state.UltimaPartidaReducer.deBolamurcha,
    sociostimea: state.UltimaPartidaReducer.sociostimea,
    sociostimeb: state.UltimaPartidaReducer.sociostimeb,
    exibeEvolucaoUltimaPartida: state.UltimaPartidaReducer.exibeEvolucaoUltimaPartida,
    erroCarregarUltimaPartida: state.UltimaPartidaReducer.erroCarregarUltimaPartida
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaUltimaPartida }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UltimaPartida);