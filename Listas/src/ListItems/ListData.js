import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

const ListItems = ({ navigation}) => {
    const [item, setItemName] = useState("");
    const isFocused = useIsFocused();
    useEffect(() => { getItemName() }, [isFocused]);
    // useEffect(() => { saveListName() }, [name]);

    const getItemName = async () => {
        const itemName = await AsyncStorage.getItem(metadata.ITEM.LISTITEM);
        if (itemName) {
            setItemName(itemName);
        }
    }

    // const saveListName = async () => {
    //     const saveName = name || "";
    //     await AsyncStorage.setItem(metadata.NAME.LISTNAME, saveName);
    // }

    // const handleClick = () => {
    //     setListName(name);
    //     navigation.navigate("ListData")
    // }

    return (
        <View>
            <Text>Nome da Lista:</Text>

            <TextInput placeholder="Lista: " value={name} onChangeText={setListName}/>

            {/* <Text>{name}</Text> */}

            <Button 
                title='Salvar'
                onPress={handleClick}
            />

        </View>
    );
}

export default ListItems;
