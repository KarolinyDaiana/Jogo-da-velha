import { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-web";

export default function Forca({
    changeScreen,
    palavraForca
}) {

    const palavra = palavraForca.toUpperCase().split("");
    const [chute, setChute] = useState("");
    const [letrasChutadas, setLetrasChutadas] = useState([]);
    const [mascaraPalavra, setMascaraPalavra] = useState("_");

    // const mascaraPalavra = palavra.map((letra) => (
    // letrasChutadas.include(letra) ? letra : "_").join('')
    // ); 

    // const mascaraPalavra = (chute) =>  {
    //     palavra.map((palavra) => (
    //         palavra.includes(chute) ? chute : "_"
    //     ))
    // }

    // const verificarChute = (chute) => {
    //     palavra.map((palavra) => (
    //         palavra.includes(chute) ? mascaraPalavra.join(chute) : mascaraPalavra.join("_")
    //     ))
    // }

    return (
        <View>
            <Text>
                Olá esta é a forca
            </Text>
            
            <Text>Palavra da vez: {mascaraPalavra}</Text>

            <Text>Dê o palpite da letra: </Text>
            <TextInput placeholder="..." value={chute} onChangeText={setChute}/>
            <Button title="Palpitar"/>
            
            <Text> Palavra: {palavra} </Text>
        </View>
    )
}