import React from 'react';
import { StyleSheet, Text, View, Image, Button, Slider,TouchableOpacity, Dimensions } from 'react-native';
// import 'App.css';
import Video from 'react-native-video';
import { Camera, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    barcodeScanning: false,
    faceDetecting: false,
    faces: [],
    newPhotos: false,
    permissionsGranted: false,
    pictureSize: undefined,
    pictureSizes: [],
    pictureSizeId: 0,
    showGallery: false,
    showMoreOptions: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  createListElements(list) {
    return(list.map((listElement) => {
      return(
        <Text style={styles.groceryItem}>{listElement}</Text>
      )
    }));
  }

  zoomOut = () => this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });

  setFocusDepth = depth => this.setState({ depth });

  takePicture() {
    const options = {};
    this.camera
      .capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} zoom={this.state.zoom}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 30, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width},
        capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          color: '#000',
          padding: 10,
          margin: 40  
        },
})

//     const groceryList = [
//       "Banana",
//       "coconut",
//       "Agave",
//       "Small Child",
//     ]

//     return (
//       <View style={styles.container}>
//       <View>
//         <Text>yeah boy! I got this</Text>
//           <Text>how bout dis?</Text>
//             {this.createListElements(groceryList)}
//           <Image source={require('./assets/little_bird.png')} />
//           <Camera
//             ref={cam => {this.camera = cam}}
//             style = {styles.preview}
//             >
            // <Text style={styles.capture}
            // onPress={this.takePicture.bind(this)}>
            // [CAPTURE]
            // </Text>
//             </Camera>

//           {/* <Button>"Take photo"</Button> */}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightgray',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   groceryItem: {
//     fontSize: 50,
//   },
//   overlay: {
//   position: 'absolute',
//   top: 9,
//   left: 7,
//   // object-fit: contain,
//   maxHeight: 12.5,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: Dimensions.get('window').height,
//     width: Dimensions.get('window').width},
//     capture: {
//       flex: 0,
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       color: '#000',
//       padding: 10,
//       margin: 40  
//     },
  
//   });
