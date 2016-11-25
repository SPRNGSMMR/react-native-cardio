import React, {Component} from 'react'
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import CardIOView from 'react-native-cardio'

const {width, height} = Dimensions.get('window')

class App extends Component {

  state = {
    numbers: '',
    isModalOpened: false,
    borderWidth: new Animated.Value(0)
  }

  setScore (score) {
    Animated
      .spring(this.state.borderWidth, {toValue: score})
      .start()
  }

  render () {
    const borderWidth = this.state.borderWidth.interpolate({
      inputRange: [0, 20],
      outputRange: [2, 5],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="default" />

        <TouchableOpacity onPress={() => this.setState({isModalOpened: true})}>
          <Text style={styles.instructions}>Scan</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={this.state.numbers} />

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isModalOpened}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <View style={[styles.container, styles.modal]}>
            <StatusBar barStyle="light-content" />

            <View style={styles.cardView}>
              <CardIOView
                onFocusScore={score => this.setScore(score)}
                onScan={numbers => this.setState({isModalOpened: false, numbers})}
                style={styles.cardViewInner} />

              <Image
                source={require('./img/overlay.png')}
                style={[styles.cardView, styles.cardViewInner]} />

              <Animated.View style={[styles.overlay, {borderWidth}]} />
            </View>

            <TouchableOpacity onPress={() => this.setState({isModalOpened: false})}>
              <Text style={[styles.instructions, styles.modalInstructions]}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    color: '#1274B8',
    fontSize: 15
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    height: 50,
    fontSize: 15,
    margin: 30,
    paddingLeft: 12,
    paddingRight: 12
  },
  cardView: {
    height: width,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  cardViewInner: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  overlay: {
    borderColor: '#ffffff',
    borderRadius: 19,
    height: width * 0.59,
    width: width * 0.9
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  modalInstructions: {
    color: '#ffffff'
  }
})

export default App
