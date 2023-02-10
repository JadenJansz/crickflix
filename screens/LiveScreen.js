import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { Divider } from '@rneui/themed'
import { Avatar } from '@rneui/base'
import Comment from '../components/Comment'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Ionicons';

import MyText from '../components/MyText'

const LiveScreen = () => {

  const video = require('../assets/videoplayback.mp4')

  const [text, setText] = useState('');
  const [comment, setComment] = useState([
    {
      name: 'Mohit Sharma',
      body: 'I appreciate both teams for there maximum efforts. Hope my team will comeback with foremost efforts today. All the best young Tigers !'
    }
  ])

  const handleComment = () => {
    setComment([...comment, {name: 'Jaden', body: text}])
    setText('')
    Keyboard.dismiss()
    console.log(comment)
  }

  return (
      <View className="flex-1">
        <View className="h-[220] top-0 left-0 bottom-0 right-0">
          <Video 
            source={video}
            controls={true}
            playInBackground={false}
            className="h-[220] top-0 left-0 bottom-0 right-0"
          />
        </View>

        <View className="flex-row px-5 my-[10] justify-start">
          <MyText classStyle="text-black text-base font-medium">1st T20 | </MyText>
          <MyText classStyle="text-red-600 text-base font-medium ml-auto">Live <MyText classStyle="text-black text-base font-medium">BDESH vs AUSTRALIA 2021</MyText></MyText>
        </View>
        <View className="flex-row px-5 my-[10] justify-start">
          <MyText classStyle="text-[#A0A0A0] text-base font-medium">100K views</MyText>
          <MyText classStyle="text-[#A0A0A0] text-base font-medium ml-auto">02 Aug 2021</MyText>
        </View>

        <Divider style={{ height: 1, elevation: 2}}/>

        <View className="p-5 flex-row justify-between items-center">
          <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg'}} />

          <TextInput 
            className="border-[#ADADAD] border-2 w-64 rounded-2xl py-[5] px-[10] text-black"
            placeholder='Add a public comment'
            placeholderTextColor="#ADADAD"
            value={text}
            onChangeText={text => setText(text)}
          />
          <TouchableOpacity onPress={() => handleComment()}>
            <Icon name="send" size={25} color="gray" />
          </TouchableOpacity>
        </View>

        <Divider style={{ height: 1, elevation: 2}} />

        <FlatList 
          data={comment}
          ItemSeparatorComponent={() => <Divider  style={{height: 10}} />}
          renderItem={({ item }) => <Comment item={item} />}
        />
      </View>
  )
}

export default LiveScreen

const styles = StyleSheet.create({})