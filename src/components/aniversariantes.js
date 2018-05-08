import React, { Component } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

import { general } from '../styles';

import { carregaAniversariantes } from '../actions/AppActions';

class Aniversariantes extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.carregaAniversariantes();
    }

    exibeAniversariantes() {
        return this.props.aniversariantes.map( (niver, i) => (
            <ListItem
                key={i}
                title={niver.nmApelido}
                subtitle={niver.data}
                topDivider
                bottomDivider
                leftAvatar={{ 
                    rounded: true,
                    source: { uri: `data:image/png;base64, ${niver.foto}` },
                }}
                onPress={() => false } 
            />
            
        ));
    }

    

    render() {
        if (!this.props.aniversariantes.length) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color='#ff0000'/>
                </View>
            )
        } else {
            return (
                <ScrollView>
                    <View style={ general.container }>
                        { this.exibeAniversariantes() }
                    </View>
                </ScrollView>
            )
        }
    }
    
}

const mapStateToProps = state => ({ 
    aniversariantes: state.AppReducer.aniversariantes
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaAniversariantes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aniversariantes);
