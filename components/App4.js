import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Map from './Map';

// A placeholder until we get our own location
const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default class App extends React.Component {
  state = {
    region: null,
    morelLocations: []
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={region}
          places={this.state.morelLocations}
        />
      </SafeAreaView>
    );
  }
}