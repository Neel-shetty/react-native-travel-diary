import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/colors'
import ImagePicker from './ImagePicker'
import Add from './temp'

const PlaceForm = () => {
 const [enteredTitle, setEnteredTitle] = useState('')

 function changeTitleHandler(enteredText) {
  setEnteredTitle(enteredText)
 }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
      </View>
      <ImagePicker />
      {/* <Add /> */}
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form: {
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
})