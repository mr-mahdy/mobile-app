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

var PetunjukScreen = navigation => {
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
      {/* untuk menampilkan teks petunjuk penggunaan */}
      <View style={styles.containerLokasi}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.judulTextData}>Petunjuk Penggunaan</Text>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>1.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>Halaman utama akan menampilkan lokasi dan koordinat.</Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>2.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pengguna memasukkan data secara berurutan dimulai dari
                memasukkan data curah hujan dengan memasukkan tahun dan bulan
                curah hujan yang ingin diketahui. Lalu tekan tombol panah untuk
                kembali.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>3.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pengguna dapat memasukkan data kelembaban tanah. Pengguna dapat
                memasukkan data tahun dan bulan yang ingin diketahui. Lalu tekan
                tombol panah untuk kembali.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>4.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pengguna dapat memasukkan data kemiringan tanah. Pengguna dapat
                memasukkan data tahun dan bulan yang ingin diketahui. Lalu tekan
                tombol panah untuk kembali.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>5.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pengguna dapat memasukkan data pergerakan tanah. Pengguna dapat
                memasukkan data tahun dan bulan yang ingin diketahui.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>6.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Setelah, pengguna memasukkan semua data parameter longsor,
                pengguna dapat menekan tombol hasil dan aplikasi akan memberikan
                hasil tingkat kerawanan longsor sesuai dengan lokasi.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>7.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pada halaman ini, akan diberikan tampilan tanggal, lokasi,
                beserta koordinat lokasi, dan data dari seluruh parameter pada
                tahun dan bulan yang dimasukkan pengguna.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>8.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Tingkat kerawanan akan digambarkan dengan diwakilkan oleh warna
                merah, warna kuning, dan warna hijau. Warna merah menandakan
                tingkat kerawanan longsor pada lokasi tersebut tinggi. Warna
                kuning menandakan tingkat kerawanan longsor pada lokasi tersebut
                sedang. Warna hijau menandakan tingkat kerawanan longsor pada
                lokasi tersebut rendah. Aplikasi akan menampilakan tingkat
                potensi terjadinya tanah longsor.
              </Text>
            </View>
          </View>
          <View style={styles.rowHasil}>
            <View style={{flex: 1}}>
              <Text>9.</Text>
            </View>
            <View style={{flex: 8}}>
              <Text>
                Pengguna dapat menekan tombol panah untuk kembali ke halaman
                utama aplikasi.
              </Text>
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

export default PetunjukScreen;
