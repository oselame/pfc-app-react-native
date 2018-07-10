import React, { Component } from 'react';
import { Container, Content, View } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ImageGallery } from '@nlabs/react-native-image-gallery';
import PropTypes from 'prop-types'

import { carregaFotosGalerias } from '../../actions/GaleriaActions';

import { URL_GALERIA } from '../../config/server';

class FotoGaleriaScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrls: []
        };
    }

    componentWillMount() {
        const imagens = this.props.fotosgaleria.map((img) => ({
            url: encodeURI(`${URL_GALERIA}/galeria_${img.cdGaleria}/${img.nmArqfoto}`),
            id: `${  img.cdFotogaleria}`,
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

FotoGaleriaScreen.propTypes = {
    fotosgaleria: PropTypes.array
}

FotoGaleriaScreen.defaultProps = {
    fotosgaleria: []
}

export default connect(mapStateToProps, mapDispatchToProps)(FotoGaleriaScreen);
