import React, { Component } from 'react'
import { StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, View } from 'react-native'

export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="username"
          editable={true}
          style={styles.input} />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          editable={true}
          style={styles.input} />
          <TouchableOpacity style={styles.loginContainer}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginBottom: 16
  }, 
  loginContainer: {
    backgroundColor: '#aef',
    paddingVertical: 8,
    borderRadius: 8,
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  }
})