import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'

import styles from './style'

class TripScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        trip: [],
        points: []
    }

    renderItem = item => {
        return (
            <View style={ styles.item }>
                <View style={{ flex: 1 }}>
                    <Text style={ styles.itemName }>{item.item.pointName}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={ styles.wrapperItemPrice }>
                    <Text style={ styles.ItemPrice }>R$ {item.item.price.toFixed(2)}</Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async() => {
        const id = this.props.navigation.state.params.id
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS) {
            trips = JSON.parse(tripsAS)
        }

        const pointsAS = await AsyncStorage.getItem('trip-'+id)
        let points = []
        if(pointsAS) {
            points = JSON.parse(pointsAS)
        }

        let trip = {
            trip: '',
            price: 0
        }

        trips.forEach( t => {
            if(t.id == id){
                trip.trip = t.trip
                trip.price = t.price ? t.price : 0
            }
        })

        this.setState({ trip: trip, points })
    }

    render() {
        const id = this.props.navigation.state.params.id
        const { trip, points } = this.state
        return(
            <View style={{ flex: 1 }}>
                <View style={ styles.header }>

                    <TouchableOpacity onPress={ () => {
                            this.props.navigation.state.params.refresh()
                            this.props.navigation.goBack() } 
                        }
                        style={ styles.backButton }>
                        <Image source={ require('../../../assets/next.png')} />
                    </TouchableOpacity>

                    <Text style={ styles.nameTrip }>{trip.trip}</Text>
                    <Text style={ styles.priceTrip }>{parseFloat(trip.price).toFixed(2)}</Text>
                    <TouchableOpacity 
                        onPress={ () => this.props.navigation.navigate('AddPoint', { id, refresh: this.loadData }) }
                        style={ styles.add }
                    >
                            <Image source={ assets.add } />
                    </TouchableOpacity>
                </View>
                <FlatList style={{ flex: 1 }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16
                    }}
                    data={points}
                    renderItem={this.renderItem}
                    keyExtractor={ item => item.id.toString() }
                />
            </View>
        )
    }
}

export default TripScreen