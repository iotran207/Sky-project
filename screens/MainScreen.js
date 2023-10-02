import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    useAnimatedValue,
} from "react-native";
import { Icon } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { BackgroundImage } from "react-native-elements/dist/config";
import { Animated } from "react-native";

export default function MainScreen({ navigation }) {
    const [message, setMessage] = useState("");
    const [isMic, setIsMic] = useState(true);
    const [isanswer, setIsAnswer] = useState(true);
    const[height, setHeight] = useState(new Animated.Value(0));
    const [weight, setWeight] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(height, {
            toValue: "90%",
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, []);
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

                <View style={styles.ChatPlaceInput}>
                    <TextInput
                        style={styles.ChatPlaceInputText}
                        placeholder=""
                        placeholderTextColor="#006fd5"
                        onChangeText={(newText) => {
                            setMessage(newText);
                            console.log(message);
                            if (newText != "") {
                                setIsMic(false);
                            } else {
                                setIsMic(true);
                            }
                        }}
                    />
                    <TouchableOpacity
                        style={styles.ButtonSend}
                        onPress={() => {
                            console.log(message);
                        }}
                    >
                        <Icon
                            name={isMic ? "mic" : "send"}
                            color="white"
                            style={styles.IconSend}
                        />
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </BackgroundImage>
        </View>
    );
}

const styles = StyleSheet.create({
    MenuButtonPlace: {
        position: "absolute",
        top: 13,
        left: 14,
    },
    MagicEffectFake: {
        height:"6%",
        width: "13%",
        borderRadius: 25,
        top: "2%",
        left: "2%",
        backgroundColor: "#006fd5",
        borderColor: "black",
        borderWidth: 3,
    },
    UserMessager: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#006fd5",
        borderRadius: 20,
        width: "50%",
        height: 50,
    },
    UserMessagerText: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
        marginTop: 10,
    },
    PlaceButton: {
        marginTop: 1,
        backgroundColor: "black",
        marginLeft: 10,
    },
    IconSend: {
        marginTop: 15,
        marginLeft: 5,
    },
    container: {
        flex: 2,
        backgroundColor: "#000000",
    },
    ChatPlaceInput: {
        flex: 1,
        marginTop: 50,
        position: "absolute",
        left: 4,
        right: 2,
        bottom: 10,
        backgroundColor: "#171717",
        color: "#17212b",
        width: "98%",
        height: 65,
        flexDirection: "row",
        borderRadius: 30,
    },
    ChatPlaceInputText: {
        color: "white",
        fontSize: 15,
        width: "85%",
        height: "100%",
        paddingLeft: 40,
    },
    ButtonSend: {
        width: "13%",
        height: "80%",
        backgroundColor: "#006fd5",
        borderRadius: 25,
        top: 5.5,
    },
});
