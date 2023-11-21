import {View, Text, Image, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
      console.warn('Posting the comment...', newComment);
      setNewComment('');
  }
  return (
    <View style={styles.root}>
       <Image
           source={{
             uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
          }}
           style={styles.image}
       />
       <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Write your comment..."
          style={styles.input}
          multiline
       />
       <Text onPress={onPost} style={styles.button}>POST</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 5,
        borderTopWidth: 1,
        borderColor: colors.border,
        alignItems: 'flex-end',

    },
     image: {
         width: 40,
         aspectRatio: 1,
         borderRadius: 20,
     },
     input: {
         flex: 1,
         borderColor: colors.border,
         borderWidth: 1,
         borderRadius: 25,
         paddingVertical: 5,
         paddingRight: 50,
         paddingHorizontal: 10,
         marginLeft: 5,
         alignSelf: 'center',
     },
    button: {
        position: 'absolute',
        right: 15,
        bottom: 17,
        fontSize: fonts.size.s,
        fontWeight: fonts.weight.full,
        color: colors.primary,
    }
})

export default Input;


