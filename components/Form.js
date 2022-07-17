import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ActionSheetIOS,
} from "react-native";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
        initialValues={{ name: "", full: "", text: "", img: "" }}
      >
        {(props) => (
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Enter name:"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              placeholder="Enter anons:"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.text}
              multiline
              placeholder="Enter text:"
              onChangeText={props.handleChange("text")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Enter image url:"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Add" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: "silver",
    width: "80%",
  },
});
