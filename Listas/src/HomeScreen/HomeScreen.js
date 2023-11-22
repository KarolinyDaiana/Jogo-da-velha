import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "./../storage.metadata.json";
import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import { useIsFocused } from '@react-navigation/native';

// npm install @react-navigation/native

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const isFocused = useIsFocused();
    useEffect(() => { getListName() }, [isFocused])

    const [lists, setLists] = useState([])

    const getListName = async () => {
        const listName = await AsyncStorage.getItem(metadata.NAME.LISTNAME);
        if (listName) {
            setName(listName);
            var tacaca = JSON.parse(listName);
            setLists([...lists, tacaca]);
            tacaca = "";
        }
    }

    const deleteList = (index) => {
        const updatedLists = [...lists];
        updatedLists.splice(index, 1); 
        setLists(updatedLists); 
    }

    const editList = (index) => {
        navigation.navigate("ListData", { listIndex: index });
    }

    return (
        <View style={styles.body}>
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.title} >Minhas listas</Text>

                    <Button
                        title="Adicionar lista"
                        onPress={() => navigation.navigate("ListData")}
                        style={styles.btAddLista}
                        color="#0d3575"
                    />

                    <View style={styles.allLists}>
                        {lists.map((list, index) => {
                            return (
                                <View style={styles.list}>

                                    <Text 
                                    onPress={() => navigation.navigate("ListItems", {paramKey: list, })} 
                                    key={list}>
                                            {list} 
                                    </Text>

                                    <Button
                                        title="🗑️"
                                        color="#0d3575"
                                        onPress={() => deleteList(index)} 
                                    /> 

                                    <Button 
                                        title="✏️"
                                        color="#0d3575"
                                        onPress={() => editList(index)}
                                    />
                                </View>
                            );
                        })}
                        
                        {console.log(lists)}

                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#679aeb',
    },
    container: {
        flex: 1,
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
