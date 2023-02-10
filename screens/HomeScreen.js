import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { nft } from '../assets/nftData'
import { data } from '../assets/liveMatchesData'
import MatchCard from '../components/MatchCard'
import NftItems from '../components/NftItems'
import ViewAll from '../components/ViewAll'
import PodcastCard from '../components/PodcastCard'
import MyText from '../components/MyText'

const HomeScreen = () => {
  return (
    <View>
    <SafeAreaView className="bg-black flex-0" />
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

      <View >
        <Image 
            source={require('../assets/team.png')}
            className="h-[336] w-[400] bg-black/100"
            />

        <View className="absolute flex-col justify-center ml-[25] mt-[50] ">
            <MyText classStyle="font-bold text-xl text-white" >LIMITLESS</MyText>
            <MyText classStyle="font-bold text-3xl text-white">CRICKET</MyText>
            <MyText classStyle="font-bold text-4xl text-white">STREAMING</MyText>
            <MyText classStyle="font-bold text-white">Ready to watch Cricket <MyText classStyle="font-medium">live streaming?</MyText></MyText>
        </View>

        <TouchableOpacity className="absolute flex-row items-center mt-44 ml-5">
            <Image 
                source={require('../assets/Group142.png')}
                className="w-[70] h-[70] mt-5 z-50"
                />
            <View className="border-white border-2 rounded-2xl flex-row items-center h-[40] pl-[50] pr-[30] absolute ml-[30]">
                <MyText classStyle="font-Poppins text-white font-bold">STREAMING NOW</MyText>
            </View>
        </TouchableOpacity>
      </View>

        {/* Live Matches */}

        <View className=" b-9">
            <View className="p-5 mt-5">
                <MyText classStyle="text-[#0C2159] text-4xl font-bold">Live <Text className="font-light">Matches</Text></MyText>
                <MyText classStyle="text-[#0C2159] pt-1" >The Matches Streaming now</MyText>

                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <MatchCard item={item} state='live' />}
                    />
            </View>
        </View>

        {/* NFT Items */}
        <View className="bg-[#031952] p-5">
            <MyText classStyle="text-white text-2xl font-bold font-poppins pt-[22]">Become An Owner</MyText>
            <MyText classStyle="text-xl text-white font-semibold">The Most Popular <MyText classStyle="font-bold text-red-500">NFT</MyText> Items</MyText>
        </View>
        <View className="bg-[#031952] py-[10] pb-11">
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={nft}
                renderItem={({ item }) => <NftItems item={item} />}
            />
        </View>

        {/* Curated Matches */}
        <View className=" py-10">
            <View className="p-5">
                <MyText classStyle="text-[#0C2159] text-3xl font-bold">CURATED <MyText classStyle="font-light">Matches</MyText></MyText>
                <MyText classStyle="text-[#0C2159] pt-[5]">The Matches played during the past 3 days</MyText>
            </View>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <MatchCard item={item} />}
            />

            <TouchableOpacity className="flex-row justify-center pt-5">
                <ViewAll />
            </TouchableOpacity>
        </View>

        {/* Highlights */}
        <View className=" pb-[50]">
            <View className="p-5">
                <MyText classStyle="text-[#0C2159] text-3xl font-bold">HIGHLIGHTS <MyText classStyle="font-light">Videos</MyText></MyText>
                <MyText classStyle="text-[#0C2159] pt-[5]">The highlights of the matches</MyText>
            </View>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item  }) => <MatchCard item={item}/>}
            />

            <TouchableOpacity className="flex-row justify-center pt-5">
                <ViewAll />
            </TouchableOpacity>
        </View>

        {/* Podcasts */}
        <View className="bg-[#031952] pl-5">
            <Image 
                source={require('../assets/podcast.png')}
                className="w-[400] h-[1020] absolute"
            />
            <View className="pt-[50]">
                <MyText classStyle="font-bold text-xl text-white ">IT'S ALL</MyText>
                <MyText classStyle="font-bold text-4xl text-white">ABOUT</MyText>
                <MyText classStyle="font-bold text-5xl text-white">CRICKET</MyText>
            </View>
            <View className="w-[300] py-[30]">
                <MyText classStyle="text-white">Sharing experts thoughts about Cricket and what need to be done to achieve a best cricketting experience   </MyText>
            </View>
            <View className="py-5">
                <MyText classStyle="text-white text-3xl font-bold">PODCASTS</MyText>
                <MyText classStyle="text-white pt-[5]">Listen to the most significant Podcasts</MyText>
            </View>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <PodcastCard item={item}/>}
            />

            <TouchableOpacity className="flex-row justify-center pt-[30] pb-20">
                <View className="border-white border-2 p-2 px-[30] rounded-3xl flex-row justify-center">
                    <MyText classStyle="text-white font-semibold">View All</MyText>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})