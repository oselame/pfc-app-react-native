import React, { Component } from 'react';
import { Container, Content, List, ListItem, Body, Text, View } from 'native-base';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExibeEvolucao from './exibeEvolucao';
import { carregaJantares } from '../actions/JantaActions';

class Janta extends Component {
    
    componentDidMount() {
        this.carregaListaJantares();
    }

    carregaListaJantares() {
        this.props.carregaJantares();
    }

    renderEvolucao() {
        if (this.props.exibeEvolucaoJantar === true) {
            return (
                <View>
                    <ExibeEvolucao />
                </View>
            )
        } 
            return null;
        
    }

    renderRow() {
        return this.props.jantares.map( (janta) => {
            const socios = janta.socios;
            return (
                <ListItem key={janta.data}>
                    <Body>
                        <Text>{socios}</Text>
                        <Text note>{janta.data}</Text>
                    </Body>
                </ListItem>
            )
        }
    )}

    renderJantas() {
        return (
            <Container>
                <Content>
                    <List>
                        { this.renderRow() }
                    </List>
                </Content>
            </Container>
        )
    }

    render() {
        return (
            <View>
                { this.renderEvolucao() }
                { this.renderJantas() }
            </View>
        );
    }
}

const mapStateToProps = state => ({ 
    erroCarregarJantares: state.JantaReducer.erroCarregarJantares,
    jantares: state.JantaReducer.jantares,
    exibeEvolucaoJantar: state.JantaReducer.exibeEvolucaoJantar
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaJantares }, dispatch);

Janta.propTypes = {
    carregaJantares: PropTypes.func.isRequired,
    jantares: PropTypes.array,
    exibeEvolucaoJantar: PropTypes.bool
}

Janta.defaultProps = {
    jantares: [],
    exibeEvolucaoJantar: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Janta);
