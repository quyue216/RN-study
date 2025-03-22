import { StyleSheet } from "react-native";




const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        // fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
    },
    fCenter:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
})

export default globalStyles;