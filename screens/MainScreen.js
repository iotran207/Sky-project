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
import axios from "axios";
import { Audio } from 'expo-av';
import { GiftedChat } from "react-native-gifted-chat";

export default function MainScreen({ navigation }) {
    const [messages, setMessages] = useState([]);
    const [sound, setSound] = React.useState();

    async function playSound(link) {

        if (sound) {
            await stopSound();
        }
    
        const newSound = new Audio.Sound();
        setSound(newSound);
    
        try {
            await newSound.loadAsync({
                uri: `http://sky-api.personal-1.repl.co/youtube/dowload?query=${link}`
            });
            await newSound.playAsync();
        } catch (error) {
            console.error('Error loading or playing sound', error);
        }
    }
    
    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
            setSound(undefined);
        }
    }

    async function getResponse() {
        const response = await axios.get("http://sky-api.personal-1.repl.co/utils/news");
        return response.data;
    }
    useEffect(() => {
        getResponse().then((data) => {
            setMessages([
                {
                    _id: 2,
                    text: ">> Sky top news << \n-------------------------------------------------\nTin tức được cập nhật trong 24h qua có thể bạn quan tâm\n\n"+data,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: " CHT-DIGITAL-CHAT",
                        avatar: "https://i.imgur.com/YWzE8ne.png",
                    },
                },
                {
                    _id: 1,
                    text: "Hi! Tớ là CHT-DIGITAL-CHAT, tớ có thể giúp gì cậu không?",
                    createdAt: new Date(),
                    user: { 
                        _id: 2,
                        name: "CHT-DIGITAL-CHAT",
                        avatar: "https://i.imgur.com/YWzE8ne.png",
                    },
                },
            ]);
        }, []);
    }, []);

    const onSend = (messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        if (messages[0].text.toLowerCase() == "điểm danh") {
            navigation.navigate("LoginScreen");
        }
        else if(messages[0].text.toLowerCase() == "thời tiết hôm nay"){
            navigation.navigate("WeatherModule");
        }
        
        else if(messages[0].text.toLowerCase().startsWith("bật nhạc")){
            playSound(messages[0].text.toLowerCase());
            axios.get(`http://sky-api.personal-1.repl.co/youtube/search?query=${messages[0].text.toLowerCase()}`)
            .then((response) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: "Bạn đang nghe nhạc " + response.data,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "CHT-DIGITAL-CHAT",
                            avatar: "https://i.imgur.com/TlyVwV4_d.png",
                        },
                    },
                ]));
            }
            )
        }
        else if(messages[0].text.toLowerCase().startsWith("tắt nhạc")){
            stopSound();
            setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: "Nhạc đã được tắt",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "CHT-DIGITAL-CHAT",
                        avatar: "https://i.imgur.com/TlyVwV4_d.png",
                    },
                },
            ]));
        }
        else if(messages[0].text.toLowerCase().startsWith("báo")){
            axios.get(`http://sky-api.personal-1.repl.co/utils/detail_news?id=${messages[0].text.split(" ")[1]}`)	  
            .then((response) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: response.data,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "CHT-DIGITAL-CHAT",
                            avatar: "https://i.imgur.com/TlyVwV4_d.png",
                        },
                    },
                ]));
            })
        }
        else if(messages[0].text.toLowerCase().startsWith("tkb")){
            axios.get(`https://cht-api.personal-1.repl.co/tkb/thoikhoabieu?_class=${messages[0].text.split(" ")[1]}`)	  
            .then((response) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: "Đây là thời khóa biểu của " + messages[0].text.split(" ")[1]+ "\n" + "Bấm vào để xem chi tiết    ",
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "CHT-DIGITAL-CHAT",
                            avatar: "https://i.imgur.com/TlyVwV4_d.png",
                        },
                        image:`https://cht-api.cht-confession.repl.co/tkb/?_class=${messages[0].text.split(" ")[1]}&key=letranhoanglan`
                    },
                ]));
            })
        }

        //thêm module vào đây
        else{
            axios.get(`https://cht-api.personal-1.repl.co/CHT-DIGITAL-CHAT?_question=${messages[0].text}`)
            .then((response) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, [
                    {
                        _id: Math.round(Math.random() * 1000000),
                        text: response.data.message,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "CHT-DIGITAL-CHAT",
                            avatar: "https://i.imgur.com/TlyVwV4_d.png",
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
                style={{ width: "100%", height: "100%"}}
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
        height:60,
        width: 60,
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
