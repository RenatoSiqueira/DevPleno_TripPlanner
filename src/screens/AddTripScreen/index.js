import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'

import styles from './style'

class AddTripScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        trip: '',
    }

    renderItem = item => {
        return (
            <View style={ styles.item }>
                <View style={{ flex: 1 }}>
                    <Text style={ styles.itemName }>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={ styles.wrapperItemPrice }>
                    <Text style={ styles.ItemPrice }>{item.item.price}</Text>
                </View>
            </View>
        )
    }

    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0
        }
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        //this.props.navigation.navigate('AddPoint', { id: trip.id })
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <TextInput style={ [styles.input, { marginTop: 120 }] } placeholder="Nome da Viagem" onChangeText={ txt => this.setState({ trip: txt })} />
                <TouchableOpacity style={ styles.btn } onPress={ this.handleSave }>
                    <Text>Salvar Viagem</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddTripScreen