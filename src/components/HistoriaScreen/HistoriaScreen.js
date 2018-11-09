import React from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';

import Pdf from 'react-native-pdf';

import { URL_GALERIA } from '../../config/server';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 0
    },
    pdf: {
        // flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mensagem: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    msgEvolucao: {
        fontSize: 14,
        color: '#ff0000',
        paddingTop: 10
    },
    evolucao: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10
    },
    indicador: {
        padding: 20 
    }
});

class HistoriaScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            evolution: 0,
            mensagem: -1
        }
    }

    carregaHistoria = () => {
        const arquivo = `${URL_GALERIA}/historia.pdf`;
        const source = {uri: arquivo, cache:true};

        return (
            <Pdf
                source={source}
                onLoadProgress={(percent) => {
                    const perc = Math.trunc(percent * 100);
                    const msg = Math.trunc(perc / 10);
                    this.setState({ evolution: perc, mensagem: msg });
                }}
                onLoadComplete={() => {
                    this.setState({loading: false});
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                enablePaging
                style={styles.pdf}/>
        )
    }

    mensagemEvolucao = (msg) => (
        <Text style={ styles.msgEvolucao }>{ msg }</Text>
    );

    exibeCarregarHistoria = () => {
        const { mensagem } = this.state;
        return (
            <View style={ styles.mensagem }>
                <ActivityIndicator style={ styles.indicador } size='large' color='#ff0000' />
                <Text style={ styles.evolucao }>Aguarde ... { this.state.evolution } % </Text>
                { mensagem === 1 &&  this.mensagemEvolucao('Isso vai demorar.') }
                { mensagem === 2 &&  this.mensagemEvolucao('Eu sei está demorando.') }
                { mensagem === 3 &&  this.mensagemEvolucao('É 3g? Putz lá se vai 15mb.') }
                { mensagem === 4 &&  this.mensagemEvolucao('Quase na metade, não desista você consegue.') }
                { mensagem === 5 &&  this.mensagemEvolucao('Chegamos na metade, só falta a outra metade.') }
                { mensagem === 6 &&  this.mensagemEvolucao('Só mais um pouco.') }
                { mensagem === 7 &&  this.mensagemEvolucao('Eu sei, eu sei é muita história.') }
                { mensagem === 8 &&  this.mensagemEvolucao('Finalmente existe luz no fim do túnel') }
                { mensagem === 9 &&  this.mensagemEvolucao('Senta que lá vem a história.') }
                { mensagem === 10 &&  this.mensagemEvolucao('Acabou, acabou.') }
            </View>
        )}

    render() {
        const { loading } = this.state;
        return (
            <View style={styles.container}>
                {loading && this.exibeCarregarHistoria() }
                { this.carregaHistoria() }              
           </View>
        )
    }
};

HistoriaScreen.propTypes = {
    // loading: PropTypes.bool
};

HistoriaScreen.defaultProps = {
    // loading: false
};

export default HistoriaScreen;
