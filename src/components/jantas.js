import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListItem } from 'react-native-elements';

import { carregaJantares } from '../actions/AppActions';

import { general } from '../styles';

class Janta extends Component {

    componentWillMount() {
        this.props.carregaJantares();
    }

    exibeJantares() {
        return this.props.jantares.map( (janta, i) => (
            <ListItem
                key={i}
                title={janta.socios}
                titleStyle={{ fontSize: 18 }}
                subtitle={janta.data}
                topDivider
                bottomDivider
                onPress={() => false } 
                onLongPress={() => false } 
            />            
        ));
    }

    render() {
        if (!this.props.jantares.length) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color='#ff0000'/>
                </View>
            )
        } else {
            return (
                <ScrollView>
                    <View style={ general.container }>
                       { this.exibeJantares() }
                    </View>
                </ScrollView>
            )
        }

        return (
            <View><Text>XXXX</Text></View>
        );
    }
}


const mapStateToProps = state => ({ 
    jantares: state.AppReducer.jantares
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaJantares }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Janta);