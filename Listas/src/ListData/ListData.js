import { useEffect, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

const ListData = ({ navigation }) => {

    const [name, setListName] = useState("");
    // const [lists, setLists] = useState([])

    const isFocused = useIsFocused();
    useEffect(() => { getListName() }, [isFocused]);
    useEffect(() => { saveListName() }, [name]);

    const getListName = async () => {
        const listName = await AsyncStorage.getItem(metadata.NAME.LISTNAME);
        if (listName) {
            setListName("");
            // var tacaca = JSON.stringify(listName);
            // setLists([...lists, tacaca]);
            // tacaca = "";
        }
    }
       
    const saveListName = async () => {
        const saveName = name || "";
        await AsyncStorage.setItem(metadata.NAME.LISTNAME, JSON.stringify(saveName));
    }

    const saveList = () => {
        setListName(name);
        navigation.navigate("Home")
    }

    const editList = () => {
        console.log("Editado");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Digite o nome da Lista:</Text>

            <TextInput
                placeholder="... "
                value={name}
                onChangeText={setListName}
                style={styles.input}
            />

            <Button
                title='Salvar'
                color={"#0d3575"}
                onPress={saveList}
            />

            <Button
                title='Editar'
                color={"#0d3575"}
                onPress={editList}
            />

        </View>
    );
}

export default ListData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#679aeb',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 25,
    },
    title: {
        color: "#bdd6fc",
        fontSize: 25,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        width: "90%",
    },
});
