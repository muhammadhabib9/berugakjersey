import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Home, HomeAktif, Jersey, JerseyAktif, Profile, ProfileAktif } from '../../../assets'
import { colors, fonts } from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {

  const Icon = () => {
    if(label === "Home") {
      return isFocused ? <HomeAktif /> : <Home />
    }
      if(label === "Jersey") {
        return isFocused ? <JerseyAktif /> : <Jersey />
    }
      if(label === "Profile") {
        return isFocused ? <ProfileAktif /> : <Profile />
    }
    return <Home />
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.bold,
  }),
});
