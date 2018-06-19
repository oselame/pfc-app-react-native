import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, View } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExibeEvolucao from './exibeEvolucao';

import { carregaGalerias, carregaFotosGalerias } from '../actions/GaleriaActions';

class Galeria extends Component {

    componentDidMount() {
        this.carregaGalerias();
    }
    
    carregaGalerias() {
        this.props.carregaGalerias();
    }

    handleClickGaleria(galeria) {     
        this.props.carregaFotosGalerias(galeria);
    }

    renderEvolucao() {
        if (this.props.exibeEvolucaoGaleria == true) {
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
        return this.props.galerias.map( (galeria, i) => (
            <ListItem key={i} 
                onPress={() => this.handleClickGaleria(galeria)} 
            >
                <Left>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>{galeria.deGaleria}</Text>
                        <Text note>{galeria.dtGaleria}</Text>
                    </View>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        ));
    }

    renderGaleria() {
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
                { this.renderGaleria() }
            </View>
        )
    }

}

const mapStateToProps = state => ({ 
    galerias: state.GaleriaReducer.galerias,
    exibeEvolucaoGaleria: state.GaleriaReducer.exibeEvolucaoGaleria
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaGalerias, carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Galeria);