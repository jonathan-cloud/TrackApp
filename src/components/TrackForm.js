import React, { useContext } from 'react'
import { Text, Input, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const { state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] =useSaveTrack();


  return (
    <>
      <Spacer>
        <Input placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {recording ? (<Button onPress={stopRecording} title="Stop" />) : (<Button title="Start Recording" onPress={startRecording} />)}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (<Button title="Save Recording" onPress={saveTrack} />) : null}
      </Spacer>
    </>
  )
}

export default TrackForm

const styles = StyleSheet.create({})
