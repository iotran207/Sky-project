import React from "react";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import SettingScreen from "../screens/SettingScreen";
import WeatherModule from "../components/weather";
import RelaxProject from "../components/RelaxProject";
import ScanQR from "../components/ScanQR";
import RelaxDetail from "../components/RelaxDetail";
import LoginScreen from "../components/RelaxLogin";
import RelaxMyInfo from "../components/RelaxMyInfo";
import RelaxBusScreen from "../components/RelaxBus";
import RelaxWarn from "../components/RelaxWarn";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherModule" component={WeatherModule} options={{ headerShown: false }} />
            <Stack.Screen name="ScanQR" component={ScanQR} options={{ headerShown: false }} />
            <Stack.Screen name="RelaxMyInfo" component={RelaxMyInfo} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RelaxProject" component={RelaxProject} options={{ headerShown: false}} />
            <Stack.Screen name="RelaxDetail" component={RelaxDetail} options={{ headerShown: false }} />
            <Stack.Screen name="RelaxWarn" component={RelaxWarn}/>
            <Stack.Screen name="RelaxBusScreen" component={RelaxBusScreen}/>
            
        </Stack.Navigator>
    );
}