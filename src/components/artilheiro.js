import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, List, ListItem } from 'react-native-elements';

import { general } from '../styles';
import LabelValue from './labelValue';

import { carregaListaQuadrimestreAno  } from '../actions/AppActions';
import { carregaArtilheirosQuadrimestre  } from '../actions/ArtilheiroActions';

class Artilheiro extends Component {

    constructor(props) {
        super(props);
    }
    
    
    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        /*if (nextProps.nuAno !== this.props.nuAno) {
            this.props.carregaListaQuadrimestreAno(nextProps.nuAno);
            this.props.carregaArtilheirosQuadrimestre( nextProps.nuAno, nextProps.cdQuadrimestre);
        }*/
    }

    carregaArtilheirosHandler(nuAno, cdQuadrimestre) {
        console.log("carregaArtilheirosHandler", nuAno, cdQuadrimestre);
        //this.props.carregaArtilheirosQuadrimestre( nuAno, cdQuadrimestre);
    }
    

    montaLinks() {
        return (
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', 
                    flexDirection: 'row', paddingBottom: 15 }}>
                    {
                        this.props.quadrimestres.map((quadr, i) => {

                            if (quadr.cdQuadrimestre === 4) {
                                if (quadr.cdQuadrimestre === this.props.cdQuadrimestre) {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => false }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16, fontWeight: 'bold'}]}>Anual</Text> 
                                        </TouchableHighlight>
                                    )
                                } else {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => this.carregaArtilheirosHandler(this.props.nuAno, quadr.cdQuadrimestre) }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16}]}>Anual</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            } else {
                                if (quadr.cdQuadrimestre === this.props.cdQuadrimestre) {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => false }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16, fontWeight: 'bold'}]}>{quadr.cdQuadrimestre}º quadr.</Text>
                                        </TouchableHighlight>
                                    )
                                } else {
                                    return (
                                        <TouchableHighlight
                                            key={i}
                                            onPress={() => this.carregaArtilheirosHandler(this.props.nuAno, quadr.cdQuadrimestre) }
                                            underlayColor="#cacaca">
                                            <Text style={[general.touchableHighlight, { fontSize: 16}]}>{quadr.cdQuadrimestre}º quadr.</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            }
                        })
                    }
                </View>
            </View>
        )
    }

    montaRanking() {
        return (
            this.props.artilheiros.map((rank, i) => (
                <View key={i} style={{ paddingBottom: 10  }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ width: 30 }}>
                                <Text style={{ fontSize: 10, textAlign: 'right' }}>Gols</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>                    
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ width: 30 }}>
                                <Text>{ rank.nuClassificacao }</Text>
                            </View>
                            <View>
                                <Text>{ rank.nmApelido }</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ width: 30 }}>
                                <Text style={{ textAlign: 'right' }}>{ rank.nuGols }</Text>
                            </View>
                        </View>
                    </View>        
                    <Divider style={{ backgroundColor: '#000' }} />
                </View>
            ))
        );
    }
    
    render() {
        if (this.props.exibeEvolucao == true) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color='#ff0000'/>
                </View>
            )
        } else {
            return (
                <View style={ general.container }>
                    { this.montaLinks() }
    
                    <ScrollView style={{paddingRight: 10}}>
                        { this.montaRanking() }
                    </ScrollView>
                </View>
            )
        }
    }
}

const mapStateToProps = state => ({
    nuAno: state.ArtilheiroReducer.nuAno,
    cdQuadrimestre: state.ArtilheiroReducer.cdQuadrimestre,
    artilheiros: state.ArtilheiroReducer.artilheiros,
    exibeEvolucao: state.ArtilheiroReducer.exibeEvolucao,
    quadrimestres: state.AppReducer.quadrimestres
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaListaQuadrimestreAno, carregaArtilheirosQuadrimestre }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Artilheiro);
