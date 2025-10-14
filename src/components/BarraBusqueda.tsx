import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

type Props = {
  placeholder?: string;
};

const BarraBusqueda: React.FC<Props> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Lupa.jpg')}
        style={styles.icon}
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder ?? 'Busca ubicación o mago con el que entrenar'}
        placeholderTextColor="#666"
      />
    </View>
  );
};

export default BarraBusqueda;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d1d1d1ff',
    borderWidth: 2,
    borderRadius: 0, 
    height: 50,
    margin: 16,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});