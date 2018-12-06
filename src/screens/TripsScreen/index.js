import React, { Component } from 'react'
import { View, Image, FlatList } from 'react-native'
import Trip from './Trip'

import assets from './assets'
import styles from './styles'
import isIphoneX from '../../utils/isIphoneX'

class TripsScreen extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = item => {
        return <Trip onPress={ () => this.props.navigation.navigate('Trip') } title={item.item.name} date={item.item.date} price={item.item.price} />
    }

    render() {

        const trips = [
            { id: '1', name: 'Eurotrip 2019', price: '5.000', date: '22 JAN > 23 FEV' },
            { id: '2', name: 'Expedição Atacama', price: '5.000', date: '22 JAN > 23 FEV' },
        ]

        return (
            <View style={ styles.background }>

                <Image source={ assets.map } />

                <FlatList 
                    data={trips}
                    renderItem={this.renderItem}
                    horizontal
                    pagingEnabled
                    keyExtractor={ item => item.id }
                    style={[ isIphoneX() ? { marginBottom: 10 } : null ]}
                />

            </View>
        )
    }
}

export default TripsScreen