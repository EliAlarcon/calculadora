import React from "react";
import { TouchableOpacity, Text } from "react-native";
import StyleBotonClear from "../styles/StyleBotonClear";

const BotonClear = (props) => (
    <TouchableOpacity style={StyleBotonClear.botonClear} onPress={props.manejarClear}>
        <Text style={StyleBotonClear.botonClearText}>
            {props.children}
        </Text>
    </TouchableOpacity>
);

export default BotonClear