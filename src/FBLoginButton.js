import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
    login = async () => {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1281701371968076', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
        );
      }
    }
  render() {
    return (
      <View>
        <Button
          title="Facebook Login"
          onPress={this.login}
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;