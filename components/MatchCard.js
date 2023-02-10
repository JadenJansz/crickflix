import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyText from './MyText'

const MatchCard = ({ item, state }) => {
  return (
    <View className="bg-white m-5 overflow-hidden rounded-md shadow-xl border-b-black w-[250]" style={styles.shadow}>
      <Image className="h-[183] w-[272] " source={item.image}/>

      <TouchableOpacity className={state === 'live' ? "bg-red-600 absolute w-[75] h-[30] rounded-2xl flex-row justify-start items-center ml-[90] mt-[170] z-50 shadow-lg" : "bg-[#9EFF00] absolute w-[80] h-[30] rounded-2xl flex-row justify-start items-center ml-[90] mt-[170] z-50 shadow-lg"}>
        <Image source={state === 'live' ? require('../assets/Group142.png') : require('../assets/playGreen.png')} className="w-[30] h-[30]" />
        <MyText classStyle="font-base text-sm text-center pl-1">{state === 'live' ? 'Live' : '01:32'}</MyText>
      </TouchableOpacity>

      <View className="pt-[35] flex px-5 bg-white ">
          <MyText classStyle="text-black font-base text-sm text-center">{item.title}</MyText>
          <View className="flex-row justify-evenly pb-[30] pt-[10]">
              <MyText classStyle="text-[#ADADAD] font-medium text-xs pr-20">{item.views}</MyText>
              <MyText classStyle="text-[#ADADAD] font-medium text-xs">{item.date}</MyText>
          </View>
      </View>

    </View>
  )
}

export default MatchCard

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  }
})