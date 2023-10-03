import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Forca({
    changeScreen,
    player1,
    player2
}) {

    const letra = "";
    const palavra = "";

    return (
        <View>
            <Text>
                Olá esta é a forca
            </Text>

            <TextInput placeholder="Letra..." value={letra}/>
            <TextInput placeholder="Palavra..." value={palavra}/>

            <Text>Nome do jogador {player1}</Text>
            <Button title="Clique aqui" onPress={chooseWord}/>
        </View>
    )
}