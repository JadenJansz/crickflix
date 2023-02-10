import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MyText from './MyText'

const DateCard = ({ item }) => {
  return (
    <View className="border-[#031952] border-2 flex justify-center items-center p-[3] w-[70] rounded-lg">
      <MyText classStyle="text-[#0C2159] text-3xl font-bold">{item.date}</MyText>
      <MyText classStyle="text-[#0C2159] text-xs font-bold">{item.day}</MyText>
    </View>
  )
} 

export default DateCard

const styles = StyleSheet.create({})