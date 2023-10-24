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

    const boneco = ["-", "-O", "-O--", "-O-!-", "-O-|-", "-O-|-/", "-O-|-<"]

    useEffect(() => {
        if (!mascaraPalavra.includes("_")) {
          alert('Você ganhou! A palavra era: ' + palavraForca);
          goBack();
        }
    
        if (tentativasRestantes === 0) {
          alert('Você perdeu! A palavra era: ' + palavraForca);
          goBack();
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

        <View style={styles.boneco}>
            {getBoneco(tentativasRestantes)}
        </View>

        <View style={styles.jogo}>
          <Text style={styles.titulo}>Palavra da vez: {mascaraPalavra}</Text>

          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              placeholder="Palpite..."
              value={chute}
              onChangeText={setChute}
              maxLength={1}
            />
        
            <Button 
              color="#09a092"
              title="Palpitar" 
              onPress={handlePalpite} 
              />
              
          </View>
              
            {letrasChutadas}
        </View>

      
        <Button
            borderRadius="5px"
            color="#09b092" 
            title="Voltar" 
            onPress={goBack} 
          />

      </View>
        
    )
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  },
  jogo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  boneco: {
    transform: "rotate(90deg) scale(1.5)",
    width: "50px"
  },
  textInput: {
    color: '#125c4e',
    backgroundColor: '#41d9bd',
    padding: 5,
    borderRadius: 5,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    flexDirection: "row"
  }
})