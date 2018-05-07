import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, Avatar } from 'react-native-elements';

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
        return this.props.aniversariantes.map(niver => (
            <View key={niver.cdSocio}>
                <View  
                    style={{ flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    borderBottomWidth: 1, 
                    alignItems: 'center',
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                    <View style={{ alignItems: 'flex-end'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Avatar
                                    rounded
                                    medium
                                    source={{ uri: `data:image/png;base64, ${niver.foto}` }}
                                />
                            </View>
                            <View style={{  paddingLeft: 10 }}>
                                <Text>{ niver.nmApelido }</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <View>
                            <Text>{niver.data}</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{ backgroundColor: '#000000', width: 1 }} />
            </View>
        ));
    }

    

    render() {
        return (
            <ScrollView>
                <View style={ general.container }>
                    { this.exibeAniversariantes() }
                </View>
            </ScrollView>
        )
    }
    
}

const mapStateToProps = state => ({ 
    aniversariantes: state.AppReducer.aniversariantes
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaAniversariantes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aniversariantes);
