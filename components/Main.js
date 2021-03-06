import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  // const LoadScene = () => {
  //   navigation.navigate("Contacts");
  // };

  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google's news",
      key: "1",
      img: "https://telanganatoday.com/wp-content/uploads/2022/03/Google-to-send-air-raid-alerts-to-Android-users-in-Ukraine.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple's news",
      key: "2",
      img: "https://blogs.brighton.ac.uk/sage/files/2017/12/apple-logo-259sypt.jpg",
    },
    {
      name: "Inst",
      anons: "Inst!!!",
      full: "Inst's news",
      key: "3",
      img: "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    if (article.full != "") {
      article.key = Math.random().toString();
      setNews((list) => {
        console.log(article);
        return [article, ...list];
      });
      setModalWindow(false);
    }
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View>
          <Ionicons
            name="close-circle"
            size={31}
            color="red"
            style={styles.icon}
            onPress={() => setModalWindow(false)}
          />
          <Text style={gStyle.title}>Adding Form</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>

      <Ionicons
        name="add-circle"
        size={31}
        color="green"
        style={styles.icon}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, { marginBottom: "10%", marginTop: 0 }]}>
        Main page
      </Text>
      {/* <Button title="Open contacts" onPress={LoadScene} /> */}
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={{ borderRadius: 15 }}
              resizeMode="cover"
              source={{
                uri: item.img,
                width: "100%",
                height: 300,
              }}
            />
            <Text style={[gStyle.title, { fontFamily: "", marginTop: 0 }]}>
              {item.name}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "gray",
                fontSize: 15,
                marginBottom: "5%",
              }}
            >
              {item.anons}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
  },
});
