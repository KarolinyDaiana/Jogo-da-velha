import { useEffect, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

const AddItems = ({ navigation, route }) => {

    const [item, setItem] = useState("");
    // const [itemList, setItemList] = useState([]);

    const list = route.params.paramKey;

    const isFocused = useIsFocused();
    useEffect(() => { getItemsList() }, [isFocused]);
    useEffect(() => { saveItemsList() }, [item]);

    const getItemsList = async () => {
        const itemName = await AsyncStorage.getItem(metadata.ITEM.LISTITEM);
        if (itemName) {
            setItem("");
        }
    }

    const saveItemsList = async () => {
        const saveItem = item;
        const saveList = list;
        await AsyncStorage.setItem(metadata.ITEM.LISTITEM, JSON.stringify(saveItem));
        await AsyncStorage.setItem(metadata.ITEM.ITEMLIST, JSON.stringify(saveList));
    }

    const saveItem = () => {
        setItem(item);
        navigation.navigate("ListItems", {paramKey: list, })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicione um item na lista {list}</Text>

            <TextInput
                placeholder="... "
                value={item}
                onChangeText={setItem}
                style={styles.input}
            />

            <Button
                title='Salvar'
                onPress={saveItem}
                color={"#0d3575"}
            />

        </View>
    );
}

export default AddItems;

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
