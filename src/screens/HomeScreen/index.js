import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    show: false
  }

  handleCounter = () => {
    this.setState({ 
      show: !this.state.show
    })
  }

  render () {
    const wrapperDevPlenoLogoStyle = this.state.show ? { marginTop: 60 } : null
    return (
      <ImageBackground 
        source={ assets.background }
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}>

        <View style={styles.wrapperLogoTripplanner}>
          <Image source={ assets.tripplanner } />
        </View>

        <View style={[styles.wrapperLogoDevpleno, wrapperDevPlenoLogoStyle]}>
          <Image source={ assets.devpleno } />
        </View>

        { 
          !this.state.show ? 
          <TouchableWithoutFeedback onPress={ this.handleCounter }>
            <View style={ styles.buttonBackground }>
              {/*<Text style={[styles.buttonText, txtStyle]} >*/}
              <Text style={ styles.buttonText } >INICIAR</Text>
            </View>
          </TouchableWithoutFeedback>
          : 
          <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('Trips') }>
            <View style={ styles.buttonEmptyStateBackground }>
              <Image source={ assets.pin } style={ styles.pin} />
              <Text style={ styles.buttonEmptyStateText } >Vamos planejar sua primeira viagem?</Text>
              <Image source={ assets.arrow } styles={ styles.arrow } />
            </View>
          </TouchableWithoutFeedback>
        }

      </ImageBackground>
    )
  }
}

export default HomeScreen
