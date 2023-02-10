import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

import MyText from './MyText'

const Comment = ({ item }) => {
  return (
    <View className="flex-row p-5">
      <View>
        <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }} />
      </View>

      <View className="ml-[10] w-[280]">
        <MyText classStyle="text-[#ADADAD] text-sm font-normal">{item.name}</MyText>
        <MyText classStyle="text-black text-sm font-normal my-[5]">{item.body}</MyText>
        <MyText classStyle="text-[#ADADAD] text-sm font-normal">1 year ago</MyText>
      </View>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({})