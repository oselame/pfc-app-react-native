import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carregaJantares } from '../actions/JantaActions';

class Janta extends Component {
    
    componentDidMount() {
        this.carregaListaJantares();
    }

    carregaListaJantares() {
        this.props.carregaJantares();
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

    render() {
        return (
            <Container>
                <Content>
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
    jantares: state.JantaReducer.jantares
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaJantares }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Janta);
