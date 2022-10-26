import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import Add from "./temp";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSeletedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState()
  
  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(ImageUri) {
    setSeletedImage(ImageUri)
  }
  function pickLocationHandler(location) {
    setPickedLocation(location)
  }

  function savePlaceHandler() {}

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      {/* <Add /> */}
      <LocationPicker onPickLocation={pickLocationHandler}/>
      <View style={styles.button}>
        <Button title="Submit" onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
  button: {
    padding: 20,
    margin: 4,
    //maxWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
