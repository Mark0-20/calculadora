import { useContext, useState } from "react";
import CalculadoraContext from '../CalculadoraContext';
import { StyleSheet, TextInput } from 'react-native';

function Pantalla() {
    const [enfocado, setEnfocado] = useState(false);
    const { valorPantalla, pantallaRef } = useContext(CalculadoraContext);

    return (
        <TextInput
            style={enfocado ? styles.enfocado : styles.desenfocado}
            value={valorPantalla}
            editable={false}
            caretHidden={true}
            ref={pantallaRef}
            onFocus={() => setEnfocado(true)}
            onBlur={() => setEnfocado(false)}
        />
    );
}

const styles = StyleSheet.create({
    enfocado: {
        borderWidth: 5,
        borderColor: '#007BFF',
        borderStyle: 'solid',
        backgroundColor: '#2c7d46',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'right',
        fontSize: 30,
        color: '#fff',
    },
    desenfocado: {
        borderWidth: 5,
        borderColor: '#ddd',
        borderStyle: 'solid',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
        textAlign: 'right',
        fontSize: 30,
    }
});

export default Pantalla;