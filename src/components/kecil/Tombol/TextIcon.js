import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Back, Keranjang, KeranjangPutih, Submit} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({icon, padding, onPress, title, fontSize, disabled}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <Keranjang />;
    } else if (icon === 'arrow-left') {
      return <Back />;
    } else if (icon === 'keranjang-putih') {
      return <KeranjangPutih />;
    }  else if (icon === 'submit') {
      return <Submit />;
    }

    return <Keranjang />;
  };

  return (
    <TouchableOpacity style={styles.container(padding, disabled)} onPress={onPress}>
      <Icon />
      <Jarak width={5}/>
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding, disabled) => ({
    backgroundColor: disabled ? colors.border : colors.primary,
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
