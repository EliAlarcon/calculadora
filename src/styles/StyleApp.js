import { StyleSheet } from "react-native";

const StylesApp = StyleSheet.create({
    app: {
        height: '100%',
        paddingTop: 10,
        backgroundColor: '#4269',
        fontFamily: 'sans-serif', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
      contenedorCalculadora: {
        width: 390,
        height: 630,
        padding: 14,
        backgroundColor: '#00d5',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'white',
      },
      fila: {
        margin: 4,
        flexDirection: 'row', // Por defecto, flexDirection es 'column' en React Native
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo: {
        fontFamily: 'sans-serif',
        fontSize: 25,
        color: '#ffd',
        paddingBottom: 25,
        fontWeight: "bold"
      }
})

export default StylesApp