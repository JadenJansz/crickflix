import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import MyText from '../components/MyText'

const SearchScreen = () => {
  return (
    <View className="px-[50] pt-[30] bg-white flex-1">
      <MyText classStyle="font-medium text-[#0C2159] text-2xl">Search<MyText classStyle="font-base text-[#0C2159] text-lg"> for Fixtures, Videos, Podcasts or NFT</MyText></MyText>

      <TextInput 
        className="text-black italic border-2 border-white border-b-gray-500 mt-5 p-2"
        placeholder='Seach for'
        placeholderTextColor='gray'
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})