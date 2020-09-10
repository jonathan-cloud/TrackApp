import React, {useContext, useCallback} from 'react'
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
// import '../mockLocation'
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons'; 


const TrackCreateScreen = ({isFocused}) => {
  const {addLocation, state: {recording}} = useContext(LocationContext);
  const callback = useCallback((location)=>{addLocation(location, recording)}, [recording])
  const [err] = useLocation(isFocused || recording, callback)


  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text h3>Track Create Screen</Text>
      <Map />
      
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
