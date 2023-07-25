import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

const Example = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputValue(event.nativeEvent.text);
  };
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={inputValue}
        onChange={handleInputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ddd',
    margin: 16,
    paddingHorizontal: 10,
  },
});

export default Example;
