import React from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator } from 'react-native';

import Pdf from 'react-native-pdf';

import { URL_GALERIA } from '../config/server';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});

const Historia = () => {
    const arquivo = `${URL_GALERIA}/album-20-anos.pdf`;
    const source = {uri: arquivo, cache:true};

    return (
        <View style={styles.container}>
            <Pdf
                activityIndicator={<ActivityIndicator />}
                activityIndicatorProps={{color: '#ff0000', progressTintColor: '#ff0000', size: 'large'}}
                source={source}
                onLoadComplete={() => {
                    console.log('carregou');
                }}
                onPageChanged={(page) => {
                    console.log(`current page: ${page}`);
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                style={styles.pdf}/>
        </View>
    )
};

export default Historia;
/*

http://www.peladafc.com.br/fotos/album-20-anos.pdf

class Historia extends React.Component {

    render() {
        const arquivo = `${URL_GALERIA}/album-20-anos.pdf`;
        const source = {uri: arquivo, cache:true};
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Pdf
                            activityIndicator={<ActivityIndicator />}
                            activityIndicatorProps={{color:'#009900',progressTintColor:'#009900'}}
                            source={source}
                            onLoadComplete={(numberOfPages, filePath)=>{
                                console.log('carregou');
                            }}
                            onPageChanged={(page,numberOfPages)=>{
                                console.log(`current page: ${page}`);
                            }}
                            onError={(error)=>{
                                console.log(error);
                            }}
                            style={styles.pdf}/>
                    </View>
                </Content>
            </Container>

            
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        // flex:1,
        width:Dimensions.get('window').width,
    }
});

export default Historia;
*/