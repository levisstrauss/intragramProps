import {View, FlatList} from 'react-native'
import React from 'react'
import comments from "../../data/comments.json";
import Comment from "../../components/Comment";
import Input from "./Input";

const  CommentsScreen = () => {

  return (
    <View>
        <FlatList
            data={comments}
          // @ts-ignore
            renderItem={({item}) => <Comment comment={item} includeDetails />}
            style={{padding: 10}}
        />
        <Input />
    </View>
  )
}

export default CommentsScreen
