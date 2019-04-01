// import React from 'react';
// import { Button, View, Text } from 'react-native';

// export default class HomePage extends React.Component {
//   login = async () => {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1281701371968076', {
//       permissions: ['public_profile'],
//     });
//     if (type === 'success') {
//       const response = await fetch(
//        `https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert(
//        'Logged in!',
//        `Hi ${(await response.json()).name}!`,
//       );
//     }
//    }
//     render() {
//         return (
//           <View>
//           <Text>
//             The button needs styling
//             The page needs styling and images
//             FB login works
//             Needs a redirect back to app
//             But hey, I got a fb API to work--- sort of
//           </Text>
//           <Button title="Facebook Login" onPress={this.login} />
//           </View>
//         );
//     };
// };

import React, { Component } from 'react';
import { View, Button } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <Button
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
