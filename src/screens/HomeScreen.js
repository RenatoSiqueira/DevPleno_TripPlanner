import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

class HomeScreen extends Component {

  state = {
    counter: 0
  }

  handleCounter = () => {
    this.setState({ 
      counter: this.state.counter + 1 
    })
  }

  render () {
    return (
      <ImageBackground 
        source={require('../../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}>

        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 135
        }}>
          <Image source={ require('../../assets/logo-tripplanner.png') } />
        </View>

        <View style={{
          flex: 1,
          alignSelf: 'flex-end',
          marginRight: 10,
          marginBottom: 55
        }}>
          <Image source={ require('../../assets/logo-devpleno.png') } 
          />
        </View>

        <TouchableWithoutFeedback onPress={ this.handleCounter }>
          <View style={{ 
            backgroundColor: 'white',
            paddingBottom: 20,
            paddingTop: 20
          }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24
              }}
            >
              INICIAR {this.state.counter}
            </Text>
          </View>
        </TouchableWithoutFeedback>

      </ImageBackground>
    )
  }
}

export default HomeScreen
