import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const TextOnly = ({ title, padding, onPress}) => {

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TextOnly

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
  }),
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.bold
  }
})