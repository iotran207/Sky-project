import React from "react";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import SettingScreen from "../screens/SettingScreen";
import WeatherModule from "../components/weather";

const Stack = createStackNavigator();

const config = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherModule" component={WeatherModule} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}