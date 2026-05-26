import { useState, useEffect, useRef, useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { calculadoraReducer, estadoInicial } from '../CalculadoraReducer';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
import CalculadoraContext from '../CalculadoraContext';


function Calculadora() {
  const [estado, dispatch] = useReducer(calculadoraReducer, estadoInicial)
  //const [ estado, dispatch ] = useReducer( calculadoraReducer, estadoInicial, (inicial) => {
    //const valorInicialPantalla = localStorage.getItem('ultimoValorPantalla');
    //return valorInicialPantalla ? { ...inicial, valorPantalla: valorInicialPantalla } : inicial;
  //});
  const pantallaRef = useRef(null);


  /*useEffect(() => {
    document.title = `Calculadora: ${estado.valorPantalla}`;
  });

  useEffect(() => {
    localStorage.setItem('ultimoValorPantalla', estado.valorPantalla);
  }, [estado.valorPantalla]);*/

  const presionarTecla = (tecla) => {
    if ('0123456789'.includes(tecla)) {
        dispatch({ tipo: 'PRESIONAR_NUMERO', numero: tecla });
    } else if ('+-*/'.includes(tecla)) {
        dispatch({ tipo: 'PRESIONAR_OPERADOR', operador: tecla });
    } else if (tecla === '=') {
        dispatch({ tipo: 'CALCULAR_RESULTADO' });
        pantallaRef.current?.focus();
    } else if (tecla === 'C') {
      dispatch({ tipo: 'LIMPIAR'});
    }
  };


  return (
    <CalculadoraContext.Provider value={{valorPantalla: estado.valorPantalla, presionarTecla, pantallaRef}}>
        <View style={styles.calculadora}>
            <Pantalla/>
            <Teclado/>
        </View>
    </CalculadoraContext.Provider>
  );
}

const styles = StyleSheet.create({
    calculadora: {
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    }
});

export default Calculadora;
