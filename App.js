import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import HomePage from './src/homeAlt';
import FBLoginButton from './src/FBLoginButton';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Map from './components/Map';
import App4 from './components/App4';
import Camera1 from './components/Camera';
import CameraPage from './src/camera.page.js';
// import { Camera, Permissions } from 'expo';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { useScreens } from 'react-native-screens';
import { Constants } from 'expo';
useScreens();

const Rootstack = createStackNavigator( {
  // App: App,
  LoginPage: LoginPage,
  HomePage: HomePage,
  Camera: CameraPage,
  // Map: Map,
} )
  class App extends React.Component {
    static navigationOptions = {
      title: 'anything',
    }
    onPress = () => {
      this.props.navigation.push('LoginPage');
      /* this.props.navigation.navigate('HomeScreen'); */
    };


    render() {
        return (
          <View>
            <Rootstack />
          </View>
          // <CameraPage />
        );
    };
};

const NavigationApp = createAppContainer(Rootstack);
export default NavigationApp;
// export default App;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});




// import React from 'react';
// import { Text, SafeAreaView } from 'react-native';
// import Map from './components/Map';
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