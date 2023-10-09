import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-web";

export default function Forca({
    changeScreen,
    palavraForca
}) {

    const palavra = palavraForca.toUpperCase().split("");
    const [chute, setChute] = useState(" ");
    const [letrasChutadas, setLetrasChutadas] = useState([]);
    const [mascaraPalavra, setMascaraPalavra] = useState(
        palavra.map(() => "_").join("")
    );
    const [tentativasRestantes, setTentativasRestantes] = useState(7);
    const [statusJogo, setStatusJogo] = useState("");

    useEffect(() => {
        if (!mascaraPalavra.includes("_")) {
          setStatusJogo("Você ganhou! A palavra é: " + palavraForca);
        }
    
        if (tentativasRestantes === 0) {
          setStatusJogo("Você perdeu! A palavra era: " + palavraForca);
        }
      }, [mascaraPalavra, tentativasRestantes, palavraForca]);

    const handlePalpite = () => {
        const letraChutada = chute.toUpperCase();

        if (letrasChutadas.includes(letraChutada)) {
            return;
        }

        setLetrasChutadas([...letrasChutadas, letraChutada]);

        if (palavra.includes(letraChutada)) {
          const novaMascara = palavra.map((letra) =>
            letrasChutadas.includes(letra.toUpperCase()) ? letra : "_"
          ).join(" ");
          setMascaraPalavra(novaMascara);
        } else {
            setTentativasRestantes(tentativasRestantes - 1);
        }

        setChute("");
    };


    return (
        <View>
            <Text>Olá, este é o jogo da forca</Text>
            <Text>Palavra da vez: {mascaraPalavra}</Text>
            <Text>Tentativas restantes: {tentativasRestantes}</Text>

            <Text>Dê o palpite da letra: </Text>
            <TextInput
            placeholder="......"
            value={chute}
            onChangeText={setChute}
            maxLength={1}
        />
        
        <Button title="Palpitar" onPress={handlePalpite} />

        {statusJogo ? <Text>{statusJogo}</Text> : null}
    </View>
    )
}