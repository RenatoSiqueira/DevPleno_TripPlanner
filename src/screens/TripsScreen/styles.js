import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    maps: {
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    add: {
        position: 'absolute',
        bottom: 10,
        right: 20
    }
})

export default styles