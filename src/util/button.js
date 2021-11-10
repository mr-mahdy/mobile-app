/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-loca`l
 */

import {React, useCallback} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonHijau}>
      <View style={styles.kotakParameter}>
        <Image
          style={styles.imgSosmed}
          source={require('../assets/icon/bmkg-icon.png')}
        />
        <Text style={styles.txtParameter}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#EFF0F5',
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
    justifyContent: 'space-between',
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
    flex: 1,
    height: 260,
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
    width: '70%',
    backgroundColor: '#019800',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 10,
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

export default OpenURLButton;
