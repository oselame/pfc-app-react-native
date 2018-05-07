import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'react-native-elements';

import { general } from '../styles';

import { carregaGalerias, carregaFotosGalerias } from '../actions/AppActions';

class Galeria extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
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
                onPress={() => this.handleClickGaleria(galeria.cdGaleria)}
            />
        ))
    }

    render() {
        return (
            <ScrollView>
                <View style={ general.container }>
                    <List>
                        { this.renderRow() }
                    </List>
                </View>
            </ScrollView>
        )
    }
    
}

const mapStateToProps = state => ({ 
    galerias: state.AppReducer.galerias
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaGalerias, carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Galeria);
