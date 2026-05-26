import { useContext } from "react";
import CalculadoraContext from '../CalculadoraContext';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


function Teclado(){

    const {presionarTecla} = useContext(CalculadoraContext);

    const teclas = [
    '1','2','3','+',
    '4','5','6','-',
    '7','8','9','*',
    'C','0','=','/'
    ];

    return(
       <View style={styles.teclado}>
        {teclas.map(
          tecla => <TouchableOpacity style={styles.boton} key={tecla}
            onPress={() => presionarTecla(tecla)}> <Text>{tecla}</Text></TouchableOpacity>
        )}
      </View>
    )
}


const styles =  StyleSheet.create({
    
    teclado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    boton: {
        width: '22%',
        padding: 20,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 1,
    }

})

export default Teclado