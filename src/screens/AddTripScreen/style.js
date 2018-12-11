import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    itemPrice: { 
        textAlign: 'center',
        color: '#24C6DC',
        fontWeight: 'bold'
    },
    header: {
        height: 192,
        backgroundColor: 'grey'
    },
    backButton: {
        position: 'absolute',
        width: 16,
        height: 16,
        paddingLeft: 10
    },
    nameTrip: {
        fontWeight: 'bold',
        position: 'absolute',
        left: 16,
        bottom: 24,
        fontSize: 18
    },
    priceTrip: {
        color: '#24C6DC',
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: 14,
        left: 16,
        bottom: 8
    },
    input: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 16
    },
    btn: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 16
    }
})

export default style