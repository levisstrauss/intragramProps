import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ProfileHeader from "./src/screens/ProfileScreen/ProfileHeader";
import ProfileScreen from "./src/screens/ProfileScreen";
import CommentsScreen from "./src/screens/CommentsScreen/CommentsScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";

const App = () => {
  return (
    <View>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {

  },
});
export default App;
