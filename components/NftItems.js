import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MyText from './MyText'

const NftItems = ({ item }) => {
  return (
    <View className="bg-[#031952] border-[#808080] border-2 rounded-md ml-5 mr-5 overflow-hidden py-5 px-5 flex items-center w-[220] shadow-lg">
      <MyText classStyle="text-white font-bold">
        {item.title}
      </MyText>
      <MyText classStyle="text-white relative mt-[10] ml-24 text-lg">{item.price}</MyText>
      <Image className="h-[97] w-[93] mb-5" source={item.image} />
      <MyText classStyle="text-white">{item.description}</MyText>

      <TouchableOpacity className="bg-[#9EFF00] mt-5 mb-[10] p-[10] rounded-3xl px-[25]">
        <MyText classStyle="text-black font-bold">Buy Now</MyText>
      </TouchableOpacity>
    </View>
  )
}

export default NftItems

const styles = StyleSheet.create({})