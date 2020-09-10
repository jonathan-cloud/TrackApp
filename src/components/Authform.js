import React, { useState } from 'react'
import { StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer'

const Authform = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
  <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
}

export default Authform

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginLeft: 15,
  },
})
