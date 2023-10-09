import { useState } from "react";
import { View, Button, TextInput } from "react-native";

export default function PalavraForca({
    changeScreen,
    mudarPalavra
}) {

    const [palavra, setPalavra] = useState("");

    const handleClick = () => {
        if(mudarPalavra) {
            mudarPalavra(palavra)
            changeScreen("Forca")
        }
    }

    return (
        <View>

            <TextInput placeholder="Digite a palavra" value={palavra} onChangeText={setPalavra}/>
            <Button title="Clique aqui" onPress={handleClick}/>
            
        </View>
    )
}