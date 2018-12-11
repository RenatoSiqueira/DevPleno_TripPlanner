import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

import styles from './styles'

const Trip = props => {
    const dim = Dimensions.get('window')
    return (
        <TouchableOpacity onPress={props.onPress} style={ styles.wrapperTrip } >
            <Image source={ assets.destino } style={ [styles.image, { width: dim.width-32 }] }/>

            <View style={ styles.wrapperInfo }>
                <Text style={ styles.nameTrip }>{ props.title }</Text>
                <Text style={ styles.dateTrip }>{ props.date }</Text>
            </View>

            <Text style={ styles.price }>R$ { props.price.toFixed(2) }</Text>
        </TouchableOpacity>
    )
}

export default Trip