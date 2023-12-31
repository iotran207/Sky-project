import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

export default RelaxMyInfo = () => {
  return(
    <View style={{
      flex: 1,
    }}>
      <View style={{
      }}>
        {/*thông tin học sinh*/}
        <View style={{
          marginTop: 30,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
          marginTop: 20,
        }}>👀 Họ và tên:</Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 40,
          marginTop: 20,
        }}>{this.data_name}</Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>📚 Lớp:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 80,
            marginTop: 20,
          }}>
            {this.data_class}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>⚖ Tổ chức:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 60,
            marginTop: 20,
          }}>
            {this.data_org}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>📖ID định danh:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 30,
            marginTop: 20,
          }}>
            {this.data_id}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🎂 Sinh ngày:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 50,
            marginTop: 20,
          }}>
            {this.data_birthday}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🎫Quyền hạn:</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 50,
            marginTop: 20,
          }}>
            {this.data_role}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 60,
          backgroundColor:'white',
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 20,
          }}>🏙 Thành phố :</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 40,
            marginTop: 20,
          }}>
            {this.data_city}
          </Text>
        </View>
        <View style={{
          marginTop: 10,
          height: 430,
          backgroundColor:'white',
          flexDirection: 'column',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 140,
            marginTop: 20,
          }}>🆔 Mã định dạng cá nhân</Text>
        <View style={{
            marginTop: 70,
            height: 200,
            backgroundColor:'white',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <QRCode value={this.data_id.toString()} size={200} />
        </View>
        </View>
      </View>
    </View>
  )

};