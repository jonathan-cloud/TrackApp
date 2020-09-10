import React, { useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'
import Authform from '../components/Authform';
import NavLink from '../components/NavLink'


const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext)

  
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <Authform
      headerText="Sign up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
      onSubmit={signup}
      />
      <NavLink 
      routeName="Signin"
      text="Already have an account? Sign in instead"
      />
      
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    marginBottom: 200,
  },
  
})
