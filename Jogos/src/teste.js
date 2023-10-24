import { useMemo, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

let variavel = 0;
export default function Teste() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log("Alterou o valor de contador")
    }, [contador])

    useEffect(() => {
        console.log("Alterou o valor do contador 2")
    }, [contador2])

    const array = useMemo(() => {
        console.log("Passou pelo memo")
        const itens = [...Array(contador)];
        return(
            <View>
                {
                    itens.map((item, i) => {
                        console.log("Passou dentro do map, index ", i)
                        return (
                            <View>
                                <Text>Item {i + 1}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, [contador]);

    console.log("Antes do return")
    return (
        <View>
            <Text>Contador: {contador}</Text>
            <Button title='Click' onPress={() => setContador(contador + 1)}/>

            <Text>Contador 2: {contador2}</Text>
            <Button title='Click' onPress={() => setContador2(contador2 + 1)}/>

            {array}
        </View>
    )
}