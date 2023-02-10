import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { nft } from '../assets/nftData'
import NftItems from '../components/NftItems'

import MyText from '../components/MyText'

const NftScreen = () => {
  return (
    <SafeAreaView className="bg-[#031952] flex-1">
      <FlatList 
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="p-5" />}

        ListHeaderComponent={() => (
          <View className="bg-[#031952] p-5 mb-[30]">
            <MyText classStyle="text-white pt-[22] font-bold text-2xl">Become An Owner</MyText>
            <MyText classStyle="font-base text-2xl text-white">Of The Most Popular <MyText classStyle="font-bold text-red-600">NFT</MyText> Items</MyText>
          </View>
        )}
        data={nft}
        renderItem={({ item }) => <NftItems item={item} />}
      />
    </SafeAreaView>
  )
}

export default NftScreen

const styles = StyleSheet.create({

  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 40
  }
})