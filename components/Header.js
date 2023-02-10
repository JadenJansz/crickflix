import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react'

import { Avatar } from '@rneui/base/dist/Avatar' 

const Header = () => {
  return (
    <SafeAreaView>
    <View className='bg-[#031952] h-[57] flex-row justify-around items-center border-b-black shadow-lg'>
      <Image 
        source={require('../assets/Group1481.png')}
        className="mr-28"
    />
      <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}/>
    </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})