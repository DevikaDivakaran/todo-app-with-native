import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    about:{
        color: '#8B008B',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        marginTop: 100,
        padding: 20
     },
     text: {
        color: '#41cdf4',
     },
     capitalLetter: {
        color: 'red',
        fontSize: 50
     },
     wordBold: {
        fontWeight: 'bold',
        color: 'black'
     },
     italicText: {
        color: '#37859b',
        fontStyle: 'italic'
     },
     textShadow: {
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius : 5
     }
})