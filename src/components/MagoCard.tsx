import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  nombre: string;
  descripcion: string;
  imagen: any;
};

export const MagoCard: React.FC<Props> = ({ nombre, descripcion, imagen }) => {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.image} />
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.desc}>{descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,              
    height: 750,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 200,              
    resizeMode: 'cover',
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#555',
  },
});
