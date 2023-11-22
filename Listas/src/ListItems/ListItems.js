import { useEffect, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';
import { useIsFocused } from '@react-navigation/native';

const ListItems = ({ navigation, route }) => {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const isFocused = useIsFocused();

    const list = route.params.paramKey;

    useEffect(() => { getItems() }, [focus])

    const getItems = async () => {
        const itemName = await AsyncStorage.getItem(metadata.ITEM.LISTITEM);
        const itemList = await AsyncStorage.getItem(metadata.ITEM.ITEMLIST);

        if (itemName && itemList == list) {    
            setItem(itemName);
            var tacaca = JSON.parse(itemName);
            setItems([...items, tacaca]);
            tacaca = "";
        }
    }

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Itens da lista {list}</Text>

            <Button
                title="Adicionar item"
                onPress={() => navigation.navigate("AddItems", {paramKey: list, })}
                style={styles.btAddLista}
                color="#0d3575"
            />

            <View style={styles.allLists}>
                {items.map((item, index) => {
                    return (
                        <View style={styles.list}>

                            <Text key={item}> {item} </Text>

                            <Button
                                title="🗑️"
                                color="#0d3575"
                                onPress={() => deleteItem(index)}
                            />

                            {/* <Button
                                title="✏️"
                                color="#0d3575"
                                onPress={() => editList(index)}
                            /> */}
                        </View>
                    );
                })}

                {console.log(items)}

            </View>

        </View>
    );
}

export default ListItems;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#679aeb',
    },
    container: {
        flex: 1,
        backgroundColor: '#679aeb',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 25,
    },
    title: {
        color: "#bdd6fc",
        fontSize: 30,
        fontWeight: "bold",
    },
    allLists: {
        flex: 1,
        flexDirection: "column",
        gap: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    list: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 100,
    },
});
