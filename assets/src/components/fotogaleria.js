import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ImageGallery } from '@nlabs/react-native-image-gallery';

import { general } from '../styles';

import { carregaFotosGalerias } from '../actions/AppActions';
import { URL_GALERIA } from '../config/server';

class FotoGaleria extends PureComponent {

    componentWillMount() {
        this.props.carregaFotosGalerias(this.props.cdGaleria);
    }

    renderRow() {

       const imageUrls = this.props.fotosgaleria.map((img) => ({
           url: encodeURI(`${URL_GALERIA}/galeria_${img.cdGaleria}/${img.nmArqfoto}`),
           id: '' + img.cdFotogaleria,
           title: img.nmArqfoto
         })
       );
       // console.log(imageUrls);
       return <ImageGallery 
                    images={imageUrls}  
                    /*
                    imageHeight={ Dimensions.get('window').height }
                    imageWidth={ Dimensions.get('window').width }
                    */
                />;
    }
    
    render() {
        return (
            <View style={ general.container }>
               { this.renderRow() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
    
const mapStateToProps = state => ({ 
    cdGaleria: state.AppReducer.cdGaleria,
    fotosgaleria: state.AppReducer.fotosgaleria
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FotoGaleria);
