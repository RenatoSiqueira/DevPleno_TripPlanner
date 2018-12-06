import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'

import styles from './style'

class TripScreen extends Component {
    static navigationOptions = {
        header: null
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

    render() {
        const trip = {
            name: 'EuroTrip',
            price: 'R$ 5.000',
            places: [
                { id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0 },
                { id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 300, lat: 0, long: 0 },
            ]
        }
        return(
            <View style={{ flex: 1 }}>
                <View style={ styles.header }>

                    <TouchableOpacity onPress={ () => this.props.navigation.goBack() } style={ styles.backButton }>
                        <Image source={ require('../../../assets/next.png')} />
                    </TouchableOpacity>

                    <Text style={ styles.nameTrip }>{trip.name}</Text>
                    <Text style={ styles.priceTrip }>{trip.price}</Text>
                </View>
                <FlatList style={{ flex: 1 }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16
                    }}
                    data={trip.places}
                    renderItem={this.renderItem}
                    keyExtractor={ item => item.id }
                />
            </View>
        )
    }
}

export default TripScreen