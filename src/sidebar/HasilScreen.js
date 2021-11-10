/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

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

var HasilScreen = ({route, navigation}) => {
  // untuk mengambil tanggal yang telah diinputkan
  const {date} = route.params;
  // untuk menyimpan data yang ditampilkan
  let {curahHujan, lembab, miring, gerak, rawan} = '';
  // untuk mengambil bulan dari variabel date
  const bulan = date.substring(3, 10);
  // untuk mengisi data berdasarkan bulan dan tahun inputan
  switch (bulan) {
    case '01-2020':
      curahHujan = '114.7';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '4 (Berpotensi)';
      break;
    case '02-2020':
      curahHujan = '66.5';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '4 (Berpotensi)';
      break;
    case '03-2020':
      curahHujan = '72.5';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '4 (Berpotensi)';
      break;
    case '04-2020':
      curahHujan = '37.6';
      lembab = '2';
      miring = '55';
      gerak = '1';
      rawan = '3 (Tidak berpotensi)';
      break;
    case '05-2020':
      curahHujan = '15.5';
      lembab = '1';
      miring = '55';
      gerak = '2';
      rawan = '2 (Tidak berpotensi)';
      break;
    case '06-2020':
      curahHujan = '26';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '3 (Tidak berpotensi)';
      break;
    case '07-2020':
      curahHujan = '16.8';
      lembab = '1';
      miring = '55';
      gerak = '1';
      rawan = '2 (Tidak berpotensi)';
      break;
    case '08-2020':
      curahHujan = '13.8';
      lembab = '1';
      miring = '55';
      gerak = '2';
      rawan = '2 (Tidak berpotensi)';
      break;
    case '09-2020':
      curahHujan = '16.6';
      lembab = '1';
      miring = '55';
      gerak = '2';
      rawan = '2 (Tidak berpotensi)';
      break;
    case '10-2020':
      curahHujan = '15.3';
      lembab = '1';
      miring = '55';
      gerak = '1';
      rawan = '2 (Tidak berpotensi)';
      break;
    case '11-2020':
      curahHujan = '22.9';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '3 (Tidak berpotensi)';
      break;
    case '12-2020':
      curahHujan = '64.7';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '4 (Berpotensi)';
      break;
    case '01-2021':
      curahHujan = '29.5';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '3 (Berpotensi)';
      break;
    case '02-2021':
      curahHujan = '35.2';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '3 (Berpotensi)';
      break;
    case '03-2021':
      curahHujan = '40.5';
      lembab = '2';
      miring = '55';
      gerak = '2';
      rawan = '4 (Berpotensi)';
      break;
    default:
      curahHujan = '0';
      lembab = '0';
      miring = '0';
      gerak = '0';
      rawan = '-';
      break;
  }
  // untuk menampilkan gambar tingkat kerawanan berdasarkan potensi kerawanan (1-5)
  let imgTingkat = <Text style={{fontWeight: 'bold'}}>-</Text>;
  if (rawan.split(' ')[0] === '1' || rawan.split(' ')[0] === '2') {
    imgTingkat = (
      <Image
        style={styles.imgTingkat}
        source={require('../assets/tingkat-kerawanan/Rendah.png')}
      />
    );
  } else if (rawan.split(' ')[0] === '3') {
    imgTingkat = (
      <Image
        style={styles.imgTingkat}
        source={require('../assets/tingkat-kerawanan/Sedang.png')}
      />
    );
  } else if (rawan.split(' ')[0] === '4' || rawan.split(' ')[0] === '5') {
    imgTingkat = (
      <Image
        style={styles.imgTingkat}
        source={require('../assets/tingkat-kerawanan/Tinggi.png')}
      />
    );
  }
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
      {/* untuk menampilkan hasil pengujian */}
      <View style={styles.containerLokasi}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.judulTextData}>Hasil Pengujian</Text>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Tanggal</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{date}</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Lokasi</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>
                Jayagiri Lembang, Jawa Barat
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Koordinat Lokasi</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>
                6°48'37.0"S 107°37'04.2"E
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Data Curah Hujan</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{curahHujan} mm</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Data Kelembaban Tanah</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{lembab}</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Data Kemiringan Lereng</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{miring}&deg;</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Data Pergerakan Tanah</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{gerak}</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Potensi Kerawanan</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>{rawan}</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Tingkat Kerawanan</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>{imgTingkat}</View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Text>Keterangan</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            {/* <View style={{flex: 2}}></View> */}
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Image
                style={styles.imgTingkat}
                source={require('../assets/tingkat-kerawanan/Tinggi.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>Tinggi</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Image
                style={styles.imgTingkat}
                source={require('../assets/tingkat-kerawanan/Sedang.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>Sedang</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 2}}>
              <Image
                style={styles.imgTingkat}
                source={require('../assets/tingkat-kerawanan/Rendah.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <Text>:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>Rendah</Text>
            </View>
          </View>
        </View>
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
    width: 199,
    height: 55,
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
    marginBottom: 20,
  },
  imgCuaca: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
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
  rowHasil: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  imgTingkat: {
    width: 110,
  },
});

export default HasilScreen;
