import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

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
        <View styles={styles.container}>

            <TextInput 
                placeholder="Digite a palavra" 
                value={palavra} 
                onChangeText={setPalavra}
            />
            <Button 
                color='09b092'
                title="Enviar palavra" 
                onPress={handleClick}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,  
      backgroundColor: '#e18fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })