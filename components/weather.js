import { View,Text,ImageBackground,StyleSheet,Image} from "react-native";
import React from "react";
import axios from "axios";
import {FontAwesome5,Feather} from 'react-native-vector-icons';
import * as Location from 'expo-location';


export default function WeatherModule({ navigation }) {
    const image = {uri: 'https://i.imgur.com/kvmIcab.png'};
    const [lat, setLat] = React.useState(null);
    const [lon, setLon] = React.useState(null);
    const RequestsPermission = async () => {
        const { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== "granted") {
            alert("Bạn cần đồng ý cấp quyền truy cập vị trí để sử dụng tính năng này");
            navigation.navigate("MainScreen");
        }
        const location = await Location.getCurrentPositionAsync();
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
    };
    RequestsPermission();
    console.log(lat);
    console.log(lon);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc41b7fb7cd767588a708090e58bffc6&lang=vi`)
    .then((response) => {
        this.city = response.data.name + ", " + response.data.sys.country;
        this.temp = response.data.main.temp - 273.15;
        this.description = response.data.weather[0].description;
        this.wind = response.data.wind.speed;
        this.maxtemp = response.data.main.temp_max - 273.15;
        this.mintemp = response.data.main.temp_min - 273.15;
    })
    .catch((error) => {
        console.log(error);
    });
    return (
        <ImageBackground source={image} style={{ width: "100%", height: "100%"}}>
            <View>
                <Text style={styles.city}>{this.city}</Text>
            </View>
            <View>
                <Text style={styles.temp}>{Math.round(this.temp)+" độ C"}</Text>
            </View>
            <View>
                <Text style={styles.description}>{this.description}</Text>
            </View>

            <View style={{
                marginTop: 120,
                flexDirection: "row",
            }}>
                <View style={styles.box}>
                    <Feather name="wind" color="white" style={styles.icon}/>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        marginLeft: 20,
                        fontWeight: "bold",
                    }}>Tốc độ gió</Text>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 30,
                        fontWeight: "bold",
                    }}>{this.wind+" m/s"}</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="temperature-high" color="white" style={styles.icon}/>
                    <Text style={{
                        color: "white",
                        fontSize: 17,
                        marginLeft: 15,
                        fontWeight: "bold",
                    }}>Nhiệt độ cao nhất</Text>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        marginTop: 7,
                        marginLeft: 30,
                        fontWeight: "bold",
                    }}>{Math.round(this.maxtemp) + " độ C"}</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="temperature-low" color="white" style={styles.icon}/>
                    <Text style={{
                        color: "white",
                        fontSize: 17,
                        marginLeft: 15,
                        fontWeight: "bold",
                    }}>Nhiệu độ thấp nhất</Text>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        marginTop: 7,
                        marginLeft: 30,
                        fontWeight: "bold",
                    }}>{Math.round(this.mintemp) +" độ C"}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    icon: {
        fontSize: 50,
        marginTop: 30,
        marginLeft: 50,
    },
    city: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 150,
        marginLeft: 120,
    },
    temp: {
        color: "white",
        fontSize: 80,
        fontWeight: "bold",
        marginTop: 270,
        marginLeft: 90,
    },
    description: {
        color: "white",
        fontSize: 30,
        marginTop: 20,
        marginLeft: 170,
    },
    box:{
        width: 140,
        height: 220,
        backgroundColor: "#d69e9f",
        margin: 10,
        borderRadius: 20,
    }
});