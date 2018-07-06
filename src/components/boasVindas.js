import React,  { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import { verificaBackend } from '../actions/AppActions';

const splashImage = require('../../assets/splash.png');

class BoasVindas extends Component {
    
    componentWillMount() {
        this.props.verificaBackend()
    }

    componentDidUpdate() {
        this.chamaVisaoPrincipal();
    }

    chamaVisaoPrincipal() {
        if (this.props.backendNoAr === 1) {
            setTimeout(() => {
                Actions.principal();
            }, 2000);
        }
    }

    
    render() {
        if (this.props.backendNoAr === 0) {
            return (
                <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
                    <View style={ {flex:1, justifyContent: 'center', alignItems: 'center'} }>
                        <Image source={ splashImage } />
                        <Text>Não foi possível conectar com a fonte de dados, </Text>
                        <Text>favor tentar dentro de alguns instantes.</Text>
                    </View>
                </View>
            );
        } 
        
        return (
            <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
                <View style={ {flex:1, justifyContent: 'center', alignItems: 'center'} }>
                    <Image source={ splashImage } />
                </View>
            </View>
        );
         
    }
}


const mapStateToProps = state => ({ 
    backendNoAr: state.AppReducer.backendNoAr
});

const mapDispatchToProps = dispatch => bindActionCreators({ verificaBackend }, dispatch);

BoasVindas.propTypes = {
    verificaBackend: PropTypes.func.isRequired,
    backendNoAr: PropTypes.number.isRequired,
}

BoasVindas.defaultProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BoasVindas);
