import React, { Component } from 'react';
import { Container, Content, List, ListItem, Body, Text } from 'native-base';
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

    renderRow = () => this.props.jantares.map( (janta) => {
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
    )

    render() {
        const { exibeEvolucaoJantar } = this.props;
        return (
            <Container>
                <Content>
                    { exibeEvolucaoJantar &&  <ExibeEvolucao /> }
                    <List>
                        { this.renderRow() }
                    </List>
                </Content>
            </Container>
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
