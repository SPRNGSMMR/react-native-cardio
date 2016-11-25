import React, {Component} from 'react'
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import App from './src/app'

class ReactNativeCardIOExample extends Component {

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar
          barStyle="default"
          animated={true} />
        <App />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('ReactNativeCardIOExample', () => ReactNativeCardIOExample);
