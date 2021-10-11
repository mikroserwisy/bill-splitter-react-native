import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import globalStyles from './commons/global.styles';

function FormField(props) {

  return (
    <>
      <Text style={props.labelStyle}>{props.labelText}</Text>
      <TextInput style={props.inputStyle} value={props.value.toString()} onChangeText={props.onChange} placeholder={props.placehplderText}/>
    </>
  );
}

export default function App() {

  const [amount, setAmount] = useState(0)
  const [persons, setPersons] = useState(1)
  const [tip, setTip] = useState(10)

  const calcualte = () => {
    return (+amount + (amount * (tip / 100))) / persons;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={globalStyles.androidSafeArea}>
          <FormField labelStyle={styles.label} inputStyle={styles.input} labelText="Kwota" placehplderText="Podaj wartość rachunku" value={amount} onChange={setAmount}/>
          <FormField labelStyle={styles.label} inputStyle={styles.input} labelText="Ilość osób" placehplderText="Podaj ilość osób" value={persons} onChange={setPersons}/>
          <FormField labelStyle={styles.label} inputStyle={styles.input} labelText="Napiwek" placehplderText="Podaj wartość napiwku w procentach" value={tip} onChange={setTip}/>
          <Text>Do zapłaty {calcualte()} na osobę</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  label: {
    fontSize: 30
  },
  input: {
    fontSize: 30,
    backgroundColor: 'lightgray'
  }
});
