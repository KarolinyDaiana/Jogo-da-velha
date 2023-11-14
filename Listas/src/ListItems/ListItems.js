import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

const ListItems = ({ navigation}) => {
    const [item, setItemName] = useState("");
    const [items, setItems] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => { getItemName() }, [isFocused]);
    useEffect(() => { saveListItem() }, [name]);

    const getItemName = async () => {
        const itemName = await AsyncStorage.getItem(metadata.ITEM.LISTITEM);
        if (itemName) {
            setItemName(itemName);
        }
    }

    const saveListItem = async () => {
        const saveItem = item || "";
        await AsyncStorage.setItem(metadata.ITEM.LISTITEM, saveName);
        setItems([...items, saveItem]);
    }

    const handleClick = () => {
        setItemName(item);
        navigation.navigate("Home")
    }

    return (
        <View>
            <Text>Itens da lista</Text>


            <Button 
                title='Adicionar item'
                onPress={handleClick}
            />

        </View>
    );
}

export default ListItems;
