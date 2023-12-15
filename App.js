import { Alert, Text, View } from 'react-native';
import StylesApp from './src/styles/StyleApp';
import Boton from './src/components/Boton';
import Pantalla from './src/components/Pantalla';
import { useState } from 'react';
import BotonClear from './src/components/BotonClear';


export default function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(input);
      setInput(resultado.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={StylesApp.app}>
      <Text style={StylesApp.titulo}>CALCULADORA</Text>
      <View style={StylesApp.contenedorCalculadora}>
        <Pantalla input={input}>
        </Pantalla>
        <View style={StylesApp.fila}>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </View>
        <View style={StylesApp.fila}>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </View>
        <View style={StylesApp.fila}>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </View>
        <View style={StylesApp.fila}>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </View>
        <View style={StylesApp.fila}>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </View>
      </View>
    </View>
  );
}

