import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TombolLoading = ({padding, fontSize}) => {
 

  return (
    <TouchableOpacity style={styles.container(padding)}>
      <ActivityIndicator size="small" color="#FFFFFF"/>
      <Jarak width={5}/>
      <Text style={styles.title(fontSize)}>Loading . . .</Text>
    </TouchableOpacity>
  );
};

export default TombolLoading;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.border,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize) => ({
    fontSize: fontSize ? fontSize: 15,
    color: colors.white,
    fontFamily: fonts.bold
  })
});
