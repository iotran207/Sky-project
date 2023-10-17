import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text,
} from "react-native";
import { Icon } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { BackgroundImage } from "react-native-elements/dist/config";
import Translator from "../components/translator";
import axios from "axios";

import { GiftedChat } from "react-native-gifted-chat";

export default function MainScreen({ navigation }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello, how can I help you today?",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Bard",
                    avatar: "https://lh3.googleusercontent.com/-9dQ6b2gjW2U/AAAAAAAAAAI/AAAAAAAAAAA/AFsW0b6-TJCT-YAhq5BYjyMhHBvXN6Y_mw/photo.jpg",
                },
                customComponents: <Translator />,
            },
        ]);
    }, []);

    const onSend = (messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        if (messages[0].text == "1") {
            navigation.navigate("WeatherModule");
        }
        else{
            axios.get(`https://sky-api.personal-1.repl.co/bard?promt=${messages[0].text}`)
            .then((response) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: response.data.message,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "Bard",
                            avatar: "https://lh3.googleusercontent.com/-9dQ6b2gjW2U/AAAAAAAAAAI/AAAAAAAAAAA/AFsW0b6-TJCT-YAhq5BYjyMhHBvXN6Y_mw/photo.jpg",
                        },
                    },
                ]));
            })
            .catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <View style={styles.container}>
            <BackgroundImage
                source={require("../assets/theme_chat.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={styles.MagicEffectFake}>
                    <View style={styles.MenuButtonPlace}>
                        <TouchableOpacity
                            title="Menu"
                            color="white"
                            onPress={() => navigation.navigate("SettingScreen")}
                        >
                            <Icon name="menu" color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <GiftedChat
                    messages={messages}
                    onSend={onSend}
                    user={{
                        _id: 1,
                        name: "User",
                    }}
                    renderUsernameOnMessage={true}
                    renderAvatarOnTop={true}
                />

                <StatusBar style="auto" />
            </BackgroundImage>
        </View>
    );
}

const styles = StyleSheet.create({
    MenuButtonPlace: {
        position: "absolute",
        top: 13,
        left: "25%",
    },
    MagicEffectFake: {
        height:"7%",
        width: "14%",
        borderRadius: 15,
        top: "2%",
        left: "2%",
        backgroundColor: "#006fd5",
        borderColor: "black",
        borderWidth: 3,
    },
    container: {
        flex: 2,
        backgroundColor: "#000000",
    },
});
