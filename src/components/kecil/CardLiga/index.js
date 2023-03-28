import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
import {connect} from 'react-redux';
import {getJerseyByLiga} from '../../../actions/JerseyAction';

const CardLiga = ({liga, navigation, id, dispatch}) => {
  const toJerseyByLiga = (id, namaLiga) => {
    // ke Jersey Action
    dispatch(getJerseyByLiga(id, namaLiga));

    // navigate ke ListJersey
    navigation.navigate('ListJersey');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toJerseyByLiga(id, liga.namaLiga)}>
      <Image source={{uri: liga.image}} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default connect()(CardLiga);

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 15,
  },
  logo: {
    width: responsiveWidth(57),
    height: responsiveHeight(57),
  },
});
