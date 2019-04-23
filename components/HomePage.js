// This is the homepage
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Button, Link } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default class HomePage extends React.Component {
    render() {
        return (
          <View 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
              Morel Support
            </Text>
            <Text>
              Take a picture of your find!
            </Text>
            <View 
            style={{flexDirection:'row', margin:20, justifyContent:"space-between"}}>
              <ImageBackground
                style={{width: 150, height: 150, margin: 10, justiftyContent:"center", alignItems:"center"}}
                source={{ uri: 'http://sc01.alicdn.com/kf/HTB1X5PyXQUmBKNjSZFOq6yb2XXay/2018-Fresh-Morel-Mushroom-Price-of-Black.jpg' }}
                imageStyle={{ borderRadius: 75, borderColor: "black", borderWidth: 5 }}
                >
                  <FontAwesome 
                    name="camera-retro" 
                    size={32} 
                    color="yellow" 
                    style={{ paddingTop:75 }} 
                    />
              </ImageBackground>
              <ImageBackground
                style={{width: 150, height: 150, margin: 10, justiftyContent:"center", alignItems:"center"}}
                source={{ uri: 'https://media.arkansasonline.com/img/photos/2011/02/11/Yellow_Morel_tCO_WEB_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d' }}
                imageStyle={{ borderRadius: 75, borderColor: "yellow", borderWidth: 5 }}>
                  <FontAwesome 
                    name="camera-retro" 
                    size={32} 
                    color="yellow" 
                    style={{ paddingTop:75 }} 
                    />
              </ImageBackground>
            </View>
          <Text>
            See all finds --** link to gmap mapview with plots **--
          </Text>
          <Button title='camera page' onPress={
          () => this.props.navigation.navigate( 'Camera' )
        } />
        </View>
        );
    };
};