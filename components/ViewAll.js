import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MyText from './MyText'

const ViewAll = () => {
  return (
    <View className="border-[#00278D] border-2 p-[10] px-[30] rounded-3xl flex-row justify-center">
      <MyText classStyle="text-[#00278D] font-semibold">View All</MyText>
    </View>
  )
}

export default ViewAll

const styles = StyleSheet.create({})