// this is the login page
import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FBLoginButton from '../src/FBLoginButton';
import t from 'tcomb-form-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import LoginAPI from '../src/api/LoginAPI'

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  name: t.String,
  surname: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are we going to send you things?'
    },
    name: {
      error: 'It\'s your name, that thing your parents called you..'
    },
    surname: {
      error: 'Your family name, unless youre Prince or Cher or Madonna or - just put in your last name'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

export default class App1 extends Component {
  submitSuccessNotification(response) {
    if (response.status === 201) {
      alert('Submitted Successfully!')
    } else {
      alert('failure, please try again')
    }
    console.log(response)
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const input = this._form.getValue();
    console.log('value: ', input);
    const userObject = {
      first_name: input.name,
      last_name: input.surname,
      email: input.email,
    }
    LoginAPI.addUsers(userObject)
    .then((response) => this.submitSuccessNotification(response)).catch(error => console.error(error))
    console.log(input.name)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          onSubmit={(e)=> this.handleSubmit(e)}
        />
        <Button
          title="Sign In!"
          onPress={this.handleSubmit}
        />
        <FBLoginButton />
        <Button title='home screen' onPress={
          () => this.props.navigation.navigate( 'HomePage' )
        } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});