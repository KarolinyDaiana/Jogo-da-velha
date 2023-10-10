import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";

export default function Forca({
    changeScreen,
    palavraForca
}) {

    const palavra = palavraForca.toUpperCase().split("");
    const [chute, setChute] = useState("");
    const [letrasChutadas, setLetrasChutadas] = useState([]);
    const [mascaraPalavra, setMascaraPalavra] = useState(
        palavra.map(() => "_").join("")
    );
    const [tentativasRestantes, setTentativasRestantes] = useState(6);

    const boneco = ["O-|-<", "O-|-/", "O-|-", "O-!-", "O--", "O", "x"]

    useEffect(() => {
        if (!mascaraPalavra.includes("_")) {
          alert('Você ganhou! A palavra era: ' + palavraForca);
        }
    
        if (tentativasRestantes === 0) {
          alert('Você perdeu! A palavra era: ' + palavraForca);
        }
      }, [mascaraPalavra, tentativasRestantes]);

      useEffect(() => {
        const novaMascara = palavra.map((letra) =>
            letrasChutadas.includes(letra.toUpperCase()) ? letra : "_"
          ).join(" ");
          setMascaraPalavra(novaMascara); 
      }, [letrasChutadas])

    const handlePalpite = () => {
        const letraChutada = chute.toUpperCase();

        if (letrasChutadas.includes(letraChutada)) {
            return;
        }

        setLetrasChutadas([...letrasChutadas, letraChutada]);

        if (palavra.includes(letraChutada)) {
          
        } else {
            setTentativasRestantes(tentativasRestantes - 1);
        }

        setChute("");
    };

    const goBack = () => {
      changeScreen("home")
    }

    const getBoneco = (tentativasRestantes) => {
      if(tentativasRestantes == 6) {
        return (boneco[0])
      } else if (tentativasRestantes == 5) {
        return (boneco[1])
      } else if (tentativasRestantes == 4) {
        return (boneco[2])
      }else if (tentativasRestantes == 3) {
        return (boneco[3])
      }else if (tentativasRestantes == 2) {
        return (boneco[4])
      }else if (tentativasRestantes == 1) {
        return (boneco[5])
      } else {
        return (boneco[6])
      }
    }


    return (
      <View style={styles.body}>
        <View style={styles.jogo}>
              <Text>Bem vindo ao jogo da forca!</Text>
              <Text>Palavra da vez: {mascaraPalavra}</Text>

              <Text>Dê o palpite da letra: </Text>
              <TextInput
              placeholder="......"
              value={chute}
              onChangeText={setChute}
              maxLength={1}
          />
        
          <Button title="Palpitar" onPress={handlePalpite} />

          <Button title="Voltar" onPress={goBack} />
        </View>

        <View style={styles.boneco}>
            {getBoneco(tentativasRestantes)}
           </View>
      </View>
        
    )
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    gap: "50px"
  },
  jogo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  boneco: {
    transform: "rotate(90deg) scale(1.5)",
    width: "100px"
  }
})