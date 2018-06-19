import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';
import { Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ImageGallery } from '@nlabs/react-native-image-gallery';

import { carregaFotosGalerias } from '../actions/GaleriaActions';

import { URL_GALERIA } from '../config/server';

class FotoGaleria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrls: []
        };
    }

    componentWillMount() {
        let imagens = this.props.fotosgaleria.map((img) => ({
            url: encodeURI(`${URL_GALERIA}/galeria_${img.cdGaleria}/${img.nmArqfoto}`),
            id: '' + img.cdFotogaleria,
            title: img.nmArqfoto
          })
        );

        this.setState({
            imageUrls: imagens
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <ImageGallery 
                            images={this.state.imageUrls}  
                            
                            /*
                            imageHeight={ Dimensions.get('window').height }
                            imageWidth={ Dimensions.get('window').width }
                            */
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({ 
    cdGaleria: state.GaleriaReducer.cdGaleria,
    fotosgaleria: state.GaleriaReducer.fotosgaleria
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaFotosGalerias }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FotoGaleria);
