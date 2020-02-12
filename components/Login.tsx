import React, { Component } from 'react'
import { StyleSheet, Dimensions, Image, Text, View } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.img} source={require('./images/alphabet.jpg')} />
          <Text style={styles.logoTitle}>Login to Google Account</Text>
        </View>
        <View style={styles.myForm} >
          <LoginForm />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000',
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  logoTitle: {
    color: '#fff',
  },
  img: {
    width: 200,
    height: 100
  },
  myForm: {
    flexGrow: 2
  }
})