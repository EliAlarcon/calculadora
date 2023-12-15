import React from "react";
import { TouchableOpacity, Text } from "react-native";
import StylesBoton from "../styles/StyleBoton";

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    const botonOperador = esOperador(props.children) ? StylesBoton.operador : StylesBoton.boton;

    return (
        <TouchableOpacity style={botonOperador} onPress={() => props.manejarClic(props.children)}>
            <Text style={StylesBoton.botonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

export default Boton