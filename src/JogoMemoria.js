import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function JogoMemoria({
    changeScreen,
    player1,
    player2
}) {

    const card = [
        [{id: 1, value: "❥"}, {id: 2, value: "❥"}], 
        [{id: 3, value: "❦"}, {id: 4, value: "❦"}], 
        [{id: 5, value: "★"}, {id: 6, value: "★"}], 
        [{id: 7, value: "Ѽ"}, {id: 8, value: "Ѽ"}], 
        [{id: 9, value: "✦"}, {id: 10, value: "✦"}],
        [{id: 11, value: "✪"}, {id: 12, value: "✪"}], 
        [{id: 13, value: "✿"}, {id: 14, value: "✿"}], 
        [{id: 15, value: "✱"}, {id: 16, value: "✱"}], 
        [{id: 17, value: "✸"}, {id: 18, value: "✸"}], 
        [{id: 19, value: "۞"}, {id: 20, value: "۞"}],
        [{id: 21, value: "✠"}, {id: 22, value: "✠"}], 
        [{id: 23, value: "ᴥ"}, {id: 24, value: "ᴥ"}], 
        [{id: 25, value: "囧"}, {id: 26, value: "囧"}], 
        [{id: 27, value: "✟"}, {id: 28, value: "✟"}], 
        [{id: 29, value: "〠"}, {id: 30, value: "〠"}],
        [{id: 31, value: "𒋨"}, {id: 32, value: "𒋨"}],
        [{id: 33, value: "☚"}, {id: 34, value: "☚"}],
        [{id: 35, value: "♕"}, {id: 36, value: "♕"}],
        [{id: 37, value: "♞"}, {id: 38, value: "♞"}],
        [{id: 39, value: "♟"}, {id: 40, value: "♟"}],
        [{id: 41, value: "♪"}, {id: 42, value: "♪"}],
        [{id: 43, value: "♫"}, {id: 44, value: "♫"}],
        [{id: 45, value: "☁"}, {id: 46, value: "☁"}],
        [{id: 47, value: "▶"}, {id: 48, value: "▶"}],
        [{id: 49, value: "☯"}, {id: 50, value: "☯"}]
        
    ]

    const handleClickPosition = (linha, coluna) => {
        if (card[linha][coluna] != "") {
          return;
        }
    }

    
    return (
        <View>
            <Text>
                Olá esta é o  jogo da memória
            </Text>

            <Text>Nome do jogador 1: {player1}</Text>
            <Text>Nome do jogador 2: {player2}</Text>
            
            {
                card.map((linha, indexLinha) => {
                    return(
                        <View key={indexLinha}>
                            {linha.map((coluna, indexColuna) => {
                                <TouchableOpacity key={`${indexLinha}${indexColuna}${coluna}`}
                                onPress={() => handleClickPosition(indexLinha)}
                                >
                                    <View style={styles.buttonGame}>
                                        <Text style={styles.buttonGameFont}>
                                            {coluna}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            })}
                        </View>
                    )
                })
            }

        </View>
    )
}


const styles = StyleSheet.create({
    buttonGame: {
      backgroundColor: 'red',
      width: 80,
      height: 80,
      margin: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonGameFont: {
      fontSize: 50,
      color: "#fff"
    }
  });