import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../../utils';



const CardJersey = ({jersey, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('JerseyDetail', {jersey})}>
        <Image source={{uri: jersey.gambar[0]}} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardJersey

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  card: {
    backgroundColor: colors.white,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  gambar: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
