import { useState } from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';

export default function Jogo (props) {

    const handleClick= () => {
        props.changeScreen("Home")
    }

    const [jogador1, setJogador1] = useState("");
    const [jogador2, setJogador2] = useState("");

    const pegarNomes = (nome1, nome2) => {setJogador1(nome1), setJogador2(nome2)}

    // Botões primeira fileira
    const [b1, setB1] = useState(" ");
    const [b2, setB2] = useState(" ");
    const [b3, setB3] = useState(" ");

    // Botões segunda fileira
    const [b4, setB4] = useState(" ");
    const [b5, setB5] = useState(" ");
    const [b6, setB6] = useState(" ");

    // Botões terceira fileira
    const [b7, setB7] = useState(" ");
    const [b8, setB8] = useState(" ");
    const [b9, setB9] = useState(" ");

    // Primeira fileira
    const handleClickB1 = () => {
        if(b1 === "X") {
            setB1("O");
        } else {setB1("X")}
    }
    const handleClickB2 = () => {
        if(b2 === "X") {
            setB2("O");
        } else {setB2("X")}
    }
    const handleClickB3 = () => {
        if(b3 === "X") {
            setB3("O");
        } else {setB3("X")}
    }

    // Segunda fileira
    const handleClickB4 = () => {
        if(b4 === "X") {
            setB4("O");
        } else {setB4("X")}
    }
    const handleClickB5 = () => {
        if(b5 === "X") {
            setB5("O");
        } else {setB5("X")}
    }
    const handleClickB6 = () => {
        if(b6 === "X") {
            setB6("O");
        } else {setB6("X")}
    }

        // Terceira fileira
        const handleClickB7 = () => {
            if(b7 === "X") {
                setB7("O");
            } else {setB7("X")}
        }
        const handleClickB8 = () => {
            if(b8 === "X") {
                setB8("O");
            } else {setB8("X")}
        }
        const handleClickB9 = () => {
            if(b6 === "X") {
                setB9("O");
            } else {setB9("X")}
        }


    return (
        <View style={styles.principal}>
            <View>
                <Text>Bem vindo!</Text>

                <Text>Vez do jogador {jogador1} e {jogador2}</Text>
            </View>

            <View style={styles.fileira1}>
                <Button title={b1} onPress={handleClickB1}/>
                <Button title={b2} onPress={handleClickB2}/>
                <Button title={b3} onPress={handleClickB3}/>
            </View>

            <View style={styles.fileira2}>
                <Button title={b4} onPress={handleClickB4}/>
                <Button title={b5} onPress={handleClickB5}/>
                <Button title={b6} onPress={handleClickB6}/>
            </View>

            <View style={styles.fileira3}>
                <Button title={b7} onPress={handleClickB7}/>
                <Button title={b8} onPress={handleClickB8}/>
                <Button title={b9} onPress={handleClickB9}/>
            </View>

            <Button title='Voltar' onPress={handleClick}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#5f9ea0',
        height: '30%',
    },
    principal: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 15,
    },
    fileira1: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 10,
    },
    fileira2: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 10,
    }, 
    fileira3: {
        flex: 1,
        flexDirection: 'row', 
        columnGap: 10,  
    },
  });