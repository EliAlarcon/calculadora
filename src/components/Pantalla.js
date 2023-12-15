import React from "react";
import { View, Text } from "react-native";
import StylePantalla from "../styles/StylePantalla";

const Pantalla = ({ input }) => (
    <View style={StylePantalla.input}>
        <Text style={StylePantalla.text}>
            {input}
        </Text>
    </View>
);

export default Pantalla