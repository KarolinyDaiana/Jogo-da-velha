import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "./../storage.metadata.json";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Add lista"
                onPress={() => navigation.navigate("ListaNome")}
            />  
        </View>
    );
}

export default HomeScreen;