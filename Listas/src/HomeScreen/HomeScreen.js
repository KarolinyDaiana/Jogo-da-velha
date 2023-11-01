import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "./../storage.metadata.json";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    useEffect(() => { getListName() }, [])

    const [lists, setLists] = useState([])

    const getListName = async () => {
        const listName = await AsyncStorage.getItem(metadata.NAME.LISTNAME);
        if (listName) {
            setName(listName);
            var tacaca = JSON.stringify(listName);
            setLists([...lists, tacaca]);
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Add lista"
                onPress={() => navigation.navigate("ListaNome")}
            />

            <View>
                <Text>
                    {name}
                    {console.log(lists)}
                    {lists}
                </Text>
                
            </View>


            <Button
                title="Listas"
                onPress={() => navigation.navigate("ListData")}
            />
        </View>
    );
}

export default HomeScreen;