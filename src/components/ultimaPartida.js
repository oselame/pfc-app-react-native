import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
import HTMLView from 'react-native-htmlview';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExibeEvolucao from './exibeEvolucao';

import LabelValue from './labelValue';
import ListaTimes from './listaTimes';

import { carregaUltimaPartida } from '../actions/UltimaPartidaActions';

const bolaCheiaImage = require('../../assets/bola-cheia.png');
const bolaMurchaImage = require('../../assets/bola-murcha.png');

class UltimaPartida extends Component {
    
    componentDidMount() {
        this.props.carregaUltimaPartida();
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
                    <Image source={ bolaCheiaImage } 
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
                    <Image source={ bolaMurchaImage } 
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

    renderUltimaPartida = () => (
        <View style={{ flex: 1 }}>
            { this.exibirDataPlacar() } 
            { this.exibirTimes() }
            { this.exibirBolaCheia() }
            { this.exibirBolaMurcha() }
        </View>
    )

    renderErroUltimaPartida = () => (
        <View>
            <Text>Não foi possível carregar os dados da Última Partida</Text>
            <Text>Tente novamente dentro de alguns instantantes.</Text>
        </View>
    )

    render() {
        const { erroCarregarUltimaPartida, exibeEvolucaoUltimaPartida } = this.props; 
        return ( 
            <Container>
                <Content contentContainerStyle ={{
                    justifyContent: 'center', alignItems: 'center' }}>
                    { exibeEvolucaoUltimaPartida && <ExibeEvolucao /> }
                    { erroCarregarUltimaPartida && this.renderErroUltimaPartida() }
                    { !erroCarregarUltimaPartida && this.renderUltimaPartida() }
                </Content>
            </Container>
        )
    }
    
}

UltimaPartida.propTypes = {
    carregaUltimaPartida: PropTypes.func.isRequired,
    exibeEvolucaoUltimaPartida: PropTypes.bool.isRequired,
    erroCarregarUltimaPartida: PropTypes.bool.isRequired,
    dtUltimapartida: PropTypes.string.isRequired,
    deBolamurcha: PropTypes.string.isRequired,
    deBolacheia: PropTypes.string.isRequired,
    deResultado: PropTypes.string.isRequired,
    sociostimea: PropTypes.array,
    sociostimeb: PropTypes.array,
};

UltimaPartida.defaultProps = {
    sociostimea: [],
    sociostimeb: [],
};

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