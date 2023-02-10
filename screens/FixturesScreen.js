import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { dates } from '../assets/date'
import { matches } from '../assets/matchesData' 
import DateCard from '../components/DateCard'
import FixturesCard from '../components/FixturesCard'
import MyText from '../components/MyText'

const FixturesScreen = () => {

  const renderItem = ({ item }) => <DateCard item={item} />
  
  return (
    <ScrollView>
    <View>
    <View className="p-10 pb-5 bg-white">
      <MyText classStyle="text-[#0C2159] text-3xl font-bold">Match <MyText classStyle="font-light">Fixtures</MyText></MyText>
      <MyText classStyle="text-[#0C2159] pt-[5] pb-[15]">The Matches played during the past 3 days</MyText>
      <MyText classStyle="text-[#0C2159] mt-[25] font-semibold text-sm" >August 2021</MyText>
    </View>

    <View className="mx-[10] flex-row justify-evenly">
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        ItemSeparatorComponent={() => <View className="px-[5]" />}
        renderItem={renderItem}
        />
    </View>

    <View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={matches}
        renderItem={({ item }) => <FixturesCard item={item} />}
        />
    </View>
    </View>

    <View className="bg-[#031952] mt-[50] py-10 flex">
      <MyText classStyle="text-white text-center font-medium text-3xl">MATCH REPORT</MyText>
      <View className="mt-[50] mx-[30]">
        <MyText classStyle="text-white font-medium mb-[10]">BANGLADESH VS AUSTRALIA</MyText>
        <MyText classStyle="mb-5 text-white">5TH T20 LAMPUR</MyText>

        <View className="flex-row mb-5">
          <Image
            source={require('../assets/Bangladesh.png')}
            className="w-9 h-[17] mr-[15]"
          />
          <MyText classStyle="text-white font-medium">BDESH</MyText>
          <MyText classStyle="text-white font-medium ml-auto">122/8</MyText>
        </View>

        <View className="flex-row">
          <Image
            source={require('../assets/australia.png')}
            className="w-9 h-[17] mr-[15]"
          />
          <MyText classStyle="text-white font-medium">AUS</MyText>
          <MyText classStyle="text-white font-medium ml-auto">54/1</MyText>
        </View>
      </View>

      <View className="flex items-center mt-10">
        <Image 
          source={require('../assets/groupAustralia.png')}
          className="w-[327] h-[177]"
        />
        <MyText classStyle="text-white mt-10 w-[300] text-base">It was a nightmarish end to a tough tour for Australia. 
        As if losing the series wasn't enough, in the final T20I, 
        they lost 8 for 24 to collapse to 62 all out in a chase of 123. 
        This was their lowest total across limited-overs cricket. 
        It meant Bangladesh took the series 4-1 in Dhaka.</MyText>
      </View>

    </View>
    </ScrollView>
    
  )
}

export default FixturesScreen

const styles = StyleSheet.create({})