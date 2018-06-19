import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Text, View } from 'native-base';
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
        if (this.props.exibeEvolucaoJantar == true) {
            return (
                <View>
                    <ExibeEvolucao />
                </View>
            )
        } else {
            return null;
        }
    }

    renderRow() {
        return this.props.jantares.map( (janta, i) => {
            const socios = janta.socios;
            return (
                <ListItem key={i}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Janta);
