import React from 'react';
import { View, Text, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import styles from './styles';
// import AWS from '../aws'


export default class CameraPage extends React.Component {
    camera = null;
    state = {
        captures: [],
        capturing: null,
        cameraType: null,
        hasCameraPermission: null,
    };

    setCameraType = (cameraType) => this.setState({ cameraType });

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync(
            {
                base64: true
            }
        );
        this.uploadFile(photoData)
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
        };

    uploadFile(buffer) {
        if (buffer === undefined ) {
            console.log('you broke it')
            return
        }
        var base = buffer.base64
        console.log(buffer.uri)
        var AWS = require('aws-sdk');
        var s3 = new AWS.S3({accessKeyId:'AKIAIXWN6KCHLH46ZGZQ', 
        secretAccessKey:'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', 
        region:'us-east-2'});
        const params = {
          ACL: 'public-read-write',
          Body: base,
          Bucket: 'morelapp',
          ContentType: 'data:image/jpeg;base64',
          Key: 'images/myimage.jpg',
        };

            s3.upload(params, function(err, data) {
                console.log(err, data)
            });
      };


    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted'); 
        this.setState({ hasCameraPermission });
        console.log('rendered')
    };

    render() {
        const { hasCameraPermission, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
        <React.Fragment>
            <View style={{ alignItems:"center", height: 1000, paddingTop:180 }}>
                <Camera
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                />
                    <Image source={require('./Morel.png')} 
                    style={{width: '40%', height: '40%' }}
                    />
            </View>
                {captures.length > 0 && <Gallery captures={captures}/>}
                    <Toolbar capturing={capturing}
                    onShortCapture={this.handleShortCapture}
                    />
        </React.Fragment>
        );
    };
};
