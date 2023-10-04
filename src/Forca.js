import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Forca({
    changeScreen,
    palavraForca
}) {

    const palavra = palavraForca.toUpperCase().split('');

    
    return (
        <View>
            <Text>
                Olá esta é a forca
            </Text>

            <Text>{palavra} </Text>
            <TextInput placeholder="Letra..." value={letra}/>
            <TextInput placeholder="Palavra..." value={palavra}/>

            <Text>Nome do jogador {player1}</Text>
            <Button title="Clique aqui" onPress={chooseWord}/>
        </View>
    )
}