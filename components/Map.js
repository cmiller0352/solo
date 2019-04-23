import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { MapView } from 'expo';
// import icon from '/Users/chris/Desktop/my-new-project/assets/icon.png';
// import App4 from './App4'

const Marker = MapView.Marker

export default class Map extends Component {
  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} image='./assets/icon.png' />
    ))
  }
  
  render() {
    const { region } = this.props
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    )
  }
}
const styles = {
  container: {
    width: '100%',
    height: '80%',
  }
}