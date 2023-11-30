import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fontLoaded, setFontLoaded] = React.useState(false);

  const storeData = async (email,password) => {
    try {
      await AsyncStorage.setItem('store_id',email)
      await AsyncStorage.setItem('store_password',password)
    } catch (e) {
      alert(e)
    }
  }
  const getData = async () => {
    DeviceID = await AsyncStorage.getItem('store_id')
    DevicePass = await AsyncStorage.getItem('store_password')
  }

  getData()
  const handleLogin = () => {
    storeData(email,password)
    if(this.DeviceID != null){
      setEmail(this.DeviceID)
    }
    if(this.DevicePass != null){
      setPassword(this.DevicePass)
    }
    console.log(email,password)
    axios.post("http://13.213.61.47/Login", {
        id:email,
        password: password
    },)
    .then(function (response) {
        if(response.data.status == 'success'){
        user_id = response.data.message.id;
        user_name = response.data.message.name;
        user_birthday = response.data.message.birthday;
        user_role = response.data.message.role;
        user_org = response.data.message.org;
        user_class = response.data.message.class;
        user_city = response.data.message.city;
        user_car = response.data.message.car;
        user_price = response.data.message.price;
        user_phone = response.data.message.phone;
        alert("Đăng nhập thành công! ╰(*°▽°*)╯");
        console.log(user_id)
        navigation.navigate('RelaxProject')
        }
        else{
          alert("Đừng cố hack hệ thống!Vui lòng nhập cho đúng tên và mật khẩu trước đã 🤨🤨🤨");
        }
    })
    .catch(function (error) {
        console.log(email,password)
        console.log(error);
        alert(error)
    });
  }

  React.useEffect(() => {
    Font.loadAsync({
      "Bungee": require("../assets/fonts/Bungee-Regular.ttf"),
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  if (!fontLoaded) return null
  return (

    <View style={{
      flex: 1,
      backgroundColor: '#088395',
    }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <KeyboardAvoidingView
          behavior="padding"
      >
        <Image source={require('../assets/relax/Logo.png')} style={styles.logoImage} />
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Tên Đăng Nhập..." 
            placeholderTextColor="#18587A"
            onChangeText={text => setEmail( text)}>{this.DeviceID}</TextInput>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mật Khẩu" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}>{this.DevicePass}</TextInput>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  logoImage: {
    width: 400,
    height: 400,
    marginBottom: 17,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    fontFamily: 'Bungee'
  },
  inputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    width: 300,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    marginLeft: "10%",
  },
  inputText: {
    fontFamily: 'Bungee',
    height: 50,
    color: 'black',
  },
  forgot: {
    color: '#000000',
    fontSize: 11
  },
  loginBtn: {
    width: 200,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: "30%",
  },
  loginText: {
    fontFamily: 'Bungee',
    color: 'white'
  }
});