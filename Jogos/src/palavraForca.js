import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function PalavraForca({
    changeScreen,
    mudarPalavra
}) {

    const [palavra, setPalavra] = useState("");

    const handleClick = () => {
        if(mudarPalavra) {
            if(palavra.length === 0) {
                alert("A palavra não pode estar vazia!")
                return
            } else if(palavra.includes(" ")) {
                alert("A palavra não pode conter espaços!")
            } else {
                mudarPalavra(palavra)
                changeScreen("Forca")
            }
        }
    }

    return (
        <View styles={styles.container}>

            <TextInput 
                style={styles.textInput}
                placeholder="Digite a palavra" 
                value={palavra} 
                onChangeText={setPalavra}
            />

            <Button 
                color='#09b092'
                title="Enviar palavra" 
                onPress={handleClick}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 50,  
      backgroundColor: '#9effd3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
        color: '#125c4e',
        backgroundColor: '#41d9bd',
        padding: 5,
        borderRadius: 5,
      },
  })