import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapperTrip: {
        flex: 2,
        paddingLeft: 16,
        paddingTop: 14,
        paddingRight: 16
    },
    image: {
        height: 144
    },
    wrapperInfo: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    nameTrip: {
        fontWeight: 'bold',
    },
    dateTrip: {
        color: '#9D9191',
        paddingLeft: 10
    },
    price: {
        color: '#24C6DC',
        fontSize: 12
    }
})

export default styles