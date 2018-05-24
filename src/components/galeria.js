import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListItem } from 'react-native-elements';

import { general } from '../styles';

import { carregaGalerias, carregaFotosGalerias } from '../actions/GaleriaActions';

class Galeria extends Component {
    
    componentDidMount() {
        this.props.carregaGalerias();
    }

    handleClickGaleria(cdGaleria) {     
        this.props.carregaFotosGalerias(cdGaleria);
    }

    renderRow() {
        return this.props.galerias.map( (galeria, i) => (
            <ListItem
                key={i}
                title={galeria.deGaleria}
                subtitle={galeria.dtGaleria}
                chevronColor='#000'
                chevron
                topDivider
                bottomDivider
                onPress={() => this.handleClickGaleria(galeria.cdGaleria)} 
            />
        ))
    }

    render() {
        return (
            <ScrollView>
                <View>
                    { this.renderRow() }
                </View>
            </ScrollView>
        )
    }
    
}

const mapStateToProps = state => ({ 
    galerias: state.GaleriaReducer.galerias
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaGalerias, carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Galeria);
