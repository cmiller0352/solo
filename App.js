import React from 'react';
import { View } from 'react-native';
import HomePage from './src/homepage';
import FBLoginButton from './src/FBLoginButton';
import App1 from './App1'
import CameraPage from './src/camera.page.js'
import { Camera, Permissions } from 'expo';

export default class App extends React.Component {
    render() {
        return (
          // <View>
          //   <App1 />
          //   <FBLoginButton />
          // </View>
          <CameraPage />
        );
    };
};











// import React from 'react';
// import { Text, SafeAreaView } from 'react-native';
// import Map from './src/Map.js';
// import { Location, Permissions } from 'expo';
// import { Marker } from 'react-native-maps';

// // A placeholder until we get our own location
// const region = {
//   latitude: 41.981293,
//   longitude: -88.008623,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }
// const deltas = {
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// };

// export default class App extends React.Component {
//   state = {
//     region: null,
//     coffeeShops: [],
//   }

//   componentWillMount() {
//     this.getLocationAsync();
//   }

//   getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied'
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     const region = {
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//       ...deltas
//     };
//     await this.setState({ region });
//   }


//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Map
//           region={region}
//           places={this.state.coffeeShops}
//         />
//       </SafeAreaView>
//     );
//   }
// }
// const styles = {
//   container: {
//     width: '100%',
//     height: '80%',
//   }
// }