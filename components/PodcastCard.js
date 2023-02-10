import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MyText from './MyText';

const PodcastCard = ({item}) => {
  return (
    <View>
      <View className="m-5 overflow-hidden rounded-lg w-[250]">
        <Image
          className="h-[295] w-[320]"
          source={require('../assets/podcast1.png')}
        />
        <TouchableOpacity className="bg-[#9EFF00] absolute w-[80] h-[30] rounded-2xl flex-row justify-start items-center ml-[90] mt-[280] z-50 pb-[2]">
          <Image
            source={require('../assets/playGreen.png')}
            className="w-[30] h-[30]"
          />
          <MyText classStyle="text-black font-bold text-sm text-center pl-[5]">
            01:32
          </MyText>
        </TouchableOpacity>

        <View className="pt-10 flex px-5 bg-white/10">
          <MyText classStyle="text-white font-semibold text-sm text-center">
            {item.title}
          </MyText>

          <View className="flex-row justify-evenly pb-[30] pt-[10]">
            <MyText classStyle="text-[#ADADAD] font-semibold text-xs pr-20">
              {item.views}
            </MyText>
            <MyText classStyle="text-[#ADADAD] font-semibold text-xs">
              {item.date}
            </MyText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PodcastCard;

const styles = StyleSheet.create({});
