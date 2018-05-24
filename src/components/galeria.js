import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, View } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    render() {
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

}

const mapStateToProps = state => ({ 
    galerias: state.GaleriaReducer.galerias
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaGalerias, carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Galeria);