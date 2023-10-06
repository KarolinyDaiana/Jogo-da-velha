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

            <Text> Palavra: {palavra} </Text>
        </View>
    )
}