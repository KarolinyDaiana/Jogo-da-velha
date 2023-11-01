import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.metadata.json';

const ListData = () => {
    const [name, setListName] = useState("");
    useEffect(() => { getListName() }, [])
    useEffect(() => { saveListName() }, [name]);

    const getListName = async () => {
        const listName = await AsyncStorage.getItem(metadata.NAME.LISTNAME);
        if (listName) {
            setListName(listName);
        }
    }

    const saveListName = async () => {
        const saveName = name || "";
        await AsyncStorage.setItem(metadata.NAME.LISTNAME, saveName);
    }

    const handleClick = () => {
        setListName(name);
    }

    return (
        <View>
            <Text>Noma da Lista:</Text>

            <TextInput placeholder="Lista: " value={name} onChangeText={setListName}/>
            <Text>{name}</Text>

            <Button 
                title='Salvar'
                onPress={handleClick}
            />
        </View>
    );
}

export default ListData;
