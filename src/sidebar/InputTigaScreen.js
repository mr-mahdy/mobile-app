/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import moment from 'moment';

import {
  Linking,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomDatePicker from '../util/datepicker';

var InputTigaScreen = ({navigation}) => {
  // untuk menyimpan data inputan tanggal ke dalam variable
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
  return (
    // screen nya dibungkus dengan scrollview agar screen nya dapat digeser ke bawah
    <ScrollView style={styles.container}>
      {/* Gambar ini untuk hiasan background pada screennya */}
      <Image
        style={styles.imgBg1}
        source={require('../assets/design/Group-1.png')}
      />
      <Image
        style={styles.imgBg2}
        source={require('../assets/design/Group-2.png')}
      />
      <Image
        style={styles.imgBg3}
        source={require('../assets/design/Icon-cloud.png')}
      />
      <Image
        style={styles.imgBg4}
        source={require('../assets/design/Icon-cloud.png')}
      />
      {/* untuk menampilkan logo bmkg */}
      <SafeAreaView>
        <View style={styles.containerLogoBaru}>
          <Image
            style={styles.logoBaru}
            source={require('../assets/icon/bmkg.png')}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: -5}}>
              Info
            </Text>
            <Text style={{fontSize: 24}}>Tanah Longsor</Text>
          </View>
        </View>
      </SafeAreaView>
      {/* untuk menampilkan lokasi dan logo tanah longsor */}
      <View style={styles.containerLokasi}>
        <Image
          style={styles.imgCuaca}
          source={require('../assets/design/1.png')}
        />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '100'}}>Jayagiri</Text>
          <Text style={{fontSize: 14}}>Lembang, Jawa Barat</Text>
          <Text style={{fontSize: 14}}>6??48'37.0"S 107??37'04.2"E</Text>
        </View>
      </View>
      {/* untuk menampilkan input tanggal kelembaban tanah */}
      <View style={styles.containerData}>
        <Text style={styles.judulTextData}>Data Parameter Tanah Longsor</Text>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              paddingHorizontal: 30,
              fontWeight: 'bold',
            }}>
            Data Kelembaban Tanah
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.kotakParameter}>
              <Image
                style={styles.imgParameter}
                source={require('../assets/icon/Group-877.png')}
              />
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 14, marginBottom: 5}}>Pilih Tanggal</Text>
              <CustomDatePicker
                textStyle={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderColor: 'grey',
                  textAlign: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                defaultDate={moment()}
                onDateChange={value => {
                  setDate(moment(value).format('DD-MM-YYYY'));
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Hasil Pengujian', {date: date});
          }}
          style={styles.buttonHijau}>
          <Text style={styles.txtButtonHijau}>Hasil</Text>
        </TouchableOpacity>
      </View>
      {/* untuk menampilkan footer */}
      <View style={styles.containerFooter}>
        <View style={styles.listParameter}>
          <View style={styles.kotakSosmed}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.bmkg.go.id/')}
              style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={styles.imgSosmed}
                source={require('../assets/icon/bmkg-icon.png')}
              />
              <Text style={styles.txtParameter}>bmkg.go.id</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kotakParameter}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/infobmkg')}
              style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={styles.imgSosmed}
                source={require('../assets/icon/twitter-icon.png')}
              />
              <Text style={styles.txtParameter}>@InfoBMKG</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kotakParameter}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://web.facebook.com/InfoBMKG/')
              }
              style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={styles.imgSosmed}
                source={require('../assets/icon/fb-icon.png')}
              />
              <Text style={styles.txtParameter}>@InfoBMKG</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kotakParameter}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/infobmkg/')
              }
              style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={styles.imgSosmed}
                source={require('../assets/icon/ig-icon.png')}
              />
              <Text style={styles.txtParameter}>@InfoBMKG</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kotakParameter}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://youtube.com/user/infoBMKG')
              }
              style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={styles.imgSosmed}
                source={require('../assets/icon/youtube-icon.png')}
              />
              <Text style={styles.txtParameter}>@InfoBMKG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// css untuk mengatur tampilan UI screennya
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#EFF0F5',
  },
  logoBaru: {
    width: 60,
    height: 75,
    marginRight: 10,
  },
  containerLogoBaru: {
    marginTop: 20,
    marginBottom: -30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  buttonMenu: {
    alignItems: 'flex-end',
    margin: 20,
  },
  iconMenu: {
    marginRight: '1%',
    width: 30,
    height: 25,
  },
  containerLogo: {
    paddingLeft: '15%',
  },
  logo: {
    marginTop: 20,
    width: 240,
    height: 65,
  },
  imgBg1: {
    position: 'absolute',
    width: 270,
    height: 230,
    rotation: 8,
    top: -140,
    left: -70,
  },
  imgBg2: {
    position: 'absolute',
    width: 397,
    height: 245,
    top: 60,
    right: -105,
  },
  imgBg3: {
    position: 'absolute',
    width: 45,
    height: 32,
    top: 70,
    right: 25,
  },
  imgBg4: {
    position: 'absolute',
    width: 30,
    height: 17,
    top: 105,
    right: 65,
  },
  containerLokasi: {
    width: '100%',
    height: 'auto',
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerData: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  judulTextData: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#019800',
  },
  imgCuaca: {
    height: 150,
    width: 150,
    fontSize: 13,
    marginLeft: -10,
    marginRight: 18,
  },
  listParameter: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  kotakParameter: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  imgParameter: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  txtParameter: {
    textAlign: 'center',
    fontSize: 12,
  },
  buttonHijau: {
    width: '60%',
    backgroundColor: '#019800',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  txtButtonHijau: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  containerFooter: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgSosmed: {
    width: 15,
    height: 15,
    marginBottom: 5,
  },
  kotakSosmed: {
    flex: 1,
    alignItems: 'center',
  },
});

export default InputTigaScreen;
