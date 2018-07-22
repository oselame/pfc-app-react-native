import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, View } from 'native-base';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExibeEvolucao from '../exibeEvolucao';

import { carregaGalerias, carregaFotosGalerias } from '../../actions/GaleriaActions';

class GaleriaScreen extends Component {

    componentDidMount() {
        this.carregaGalerias();
    }
    
    carregaGalerias() {
        this.props.carregaGalerias();
    }

    handleClickGaleria(galeria) {     
        this.props.carregaFotosGalerias(galeria);
    }

    renderRow = () => this.props.galerias.map( (galeria) => (
        <ListItem key={galeria.cdGaleria} 
            onPress={() => this.handleClickGaleria(galeria)} >
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
    ))

    render() {
        const { exibeEvolucaoGaleria } = this.props;
        return (
            <Container>
                <Content>
                    { exibeEvolucaoGaleria && <ExibeEvolucao /> }
                    <List>
                        { this.renderRow() }                        
                    </List>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({ 
    galerias: state.GaleriaReducer.galerias,
    exibeEvolucaoGaleria: state.GaleriaReducer.exibeEvolucaoGaleria
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaGalerias, carregaFotosGalerias }, dispatch);

GaleriaScreen.propTypes = {
    carregaGalerias: PropTypes.func.isRequired,
    carregaFotosGalerias: PropTypes.func.isRequired,
    galerias: PropTypes.array,
    exibeEvolucaoGaleria: PropTypes.bool.isRequired
}

GaleriaScreen.defaultProps = {
    galerias: []
}

export default connect(mapStateToProps, mapDispatchToProps)(GaleriaScreen);