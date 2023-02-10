import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = ({ text, children, classStyle, ...props }) => {
  return (
      <Text className={classStyle} style={{ fontFamily: 'Poppins-Medium'}}>{children}</Text>
  )
}

export default MyText

const styles = StyleSheet.create({})