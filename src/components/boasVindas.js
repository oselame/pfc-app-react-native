import React,  { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { verificaBackend } from '../actions/AppActions';

class BoasVindas extends Component {

    componentDidMount() {
        this.props.verificaBackend();
    }

    chamaVisaoPrincipal() {
        if (this.props.backendNoAr == true) {
            setTimeout(() => {
                Actions.principal();
            }, 2000);
        }
    }

    render() {
        if (this.props.backendNoAr == 0) {
            return (
                <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
                    <View style={ {flex:1, justifyContent: 'center', alignItems: 'center'} }>
                        <Image source={require('../../assets/splash.png')} />
                        <Text>Não foi possível conectar com a fonte de dados, </Text>
                        <Text>favor tentar dentro de alguns instantes.</Text>
                    </View>
                </View>
            );
        }
        if (this.props.backendNoAr != 0) {
            { this.chamaVisaoPrincipal(); }
            return (
                <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
                    <View style={ {flex:1, justifyContent: 'center', alignItems: 'center'} }>
                        <Image source={require('../../assets/splash.png')} />
                    </View>
                </View>
            );
        } 
    }
}


const mapStateToProps = state => ({ 
    backendNoAr: state.AppReducer.backendNoAr
});

const mapDispatchToProps = dispatch => bindActionCreators({ verificaBackend }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoasVindas);
