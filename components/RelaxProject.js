import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView
} from "react-native";

export default function RelaxProject({navigation}) {
    return (
        <View>
            <ImageBackground
                source={require("../assets/theme_relax.png")}
                style={styles.background}
            >
                <KeyboardAvoidingView>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={styles.searchID} placeholder="Nhập ID học sinh bạn muốn tìm kiếm"></TextInput>
                    <TouchableOpacity style={styles.ButtonSearch}></TouchableOpacity>
                </View>

                <View>
                    <View style={styles.poem}></View>
                </View>
                
                <View style={{ flexDirection: "column", flex: 1 }}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <TouchableOpacity
                            style={{
                                height: 140,
                                width: 140,
                                backgroundColor: "#f91f1f",
                                borderRadius:20,
                                marginLeft:"10%",
                                marginTop:"10%"
                            }}
                            onPress={() => alert("Hay thông báo cho nhà quản lý trường học để sử dụng tính năng này")}
                        >
                            <Text
                                style={{
                                    marginTop: "35%",
                                    marginLeft: "10%",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                🤔 Nhận diện khuôn mặt
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 140,
                                width: 140,
                                backgroundColor: "#ffd95a",
                                borderRadius: 20,
                                marginLeft:"10%",
                                marginTop:"10%"
                            }}
                            onPress={() => navigation.navigate("RelaxMyInfo")}
                        >
                            <Text
                                style={{
                                    marginTop: "35%",
                                    marginLeft: "10%",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "white",
                                    zIndex: 10,
                                }}
                            >
                                😎 Thông tin cá nhân
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <TouchableOpacity
                            style={{
                                height: 140,
                                width: 140,
                                backgroundColor: "#eca0d0",
                                borderRadius: 20,
                                marginLeft:"10%",
                                marginTop:"60%"
                            }}
                            onPress={() => navigation.navigate("ScanQR")}
                        >
                            <Text
                                style={{
                                    marginTop: "40%",
                                    marginLeft: "5%",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                📱 Quét mã QR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
    },
    searchID: {
        height: "60%",
        width: "80%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 20,
    },
    ButtonSearch: {
        height: "60%",
        width: "10%",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 5,
    },
    poem: {
        height: 150,
        width: "90%",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 30,
    },
    box: {
        marginTop: "20%",
        marginLeft: "10%",
        height: "55%",
        width: "35%",
        backgroundColor: "black",
        borderRadius: 20,
    },
});
