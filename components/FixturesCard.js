import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import MyText from './MyText'

const FixturesCard = ({ item }) => {
  return (
    <View className="flex bg-white rounded-lg p-[15] mt-10 mx-5 w-[330]">
      <View className="flex-row pr-[10]">
        <MyText classStyle="text-red-700 font-base mr-3">Live</MyText>
        <MyText classStyle="text-black mr-3 font-base">T20</MyText>
        <MyText classStyle="text-black font-base">Dhaka</MyText>
      </View>

      <View className="flex py-[10] mb-5">
          <View className="flex-row py-[10]">
            <Image 
              source={item.image1}
              className="w-9 h-[17] mr-[15]"
            />
            <MyText classStyle="text-black font-base">{item.team1}</MyText>
            <MyText classStyle="text-black font-base ml-auto">122/8</MyText>
          </View>
          <View className="flex-row mb-5">
            <Image 
              source={item.image2}
              className="w-9 h-[17] mr-[15]"
            />
            <MyText classStyle="text-black font-base">{item.team2}</MyText>
            <MyText classStyle="text-black font-base ml-auto"><MyText classStyle="text-[#ADADAD] font-medium">8.5/20 ov. target 123  </MyText>54/1</MyText>
          </View>
          <MyText classStyle="text-black font-medium">{item.description}</MyText>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity>
          <View className="border-[#00278D] border-2 p-[4] px-[15] rounded-2xl flex-row justify-center w-34">
            <MyText classStyle="text-[#00278D] font-medium">Match Report</MyText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="bg-[#FF0000] p-[5] px-[15] rounded-2xl flex-row justify-center w-32">
            <MyText classStyle="text-white font-medium">Watch Live</MyText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FixturesCard

const styles = StyleSheet.create({})