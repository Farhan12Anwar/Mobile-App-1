import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import FooterMenu from "../components/Menus/FooterMenu";
import axios from "axios";
import PostCard from "../components/PostCard";

const MyPosts = () => {
  //state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  //get user post
  const getUserPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`post/get-user-posts`);
      setLoading(false);
      //   alert(data?.message);
      setLoading(false);
      setPosts(data?.userPosts);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };

  //initial
  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} myPostScreen={true} />
        <Text>{JSON.stringify(posts, null, 4)}</Text>
      </ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default MyPosts;
