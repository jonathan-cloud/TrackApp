import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Authform from '../components/Authform'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <Authform 
      headerText="Sign in to your account"
      errorMessage={state.errorMessage}
      onSubmit={signin}
      submitButtonText="Sign in"
      />
      <NavLink 
      text="Dont have a account? sign up instead"
      routeName="Signup"
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    marginBottom: 250,
  }
})
