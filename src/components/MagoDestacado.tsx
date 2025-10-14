import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  nombre: string;
  descripcion: string;
  imagen: any;
};

export const MagoDestacadoCard: React.FC<Props> = ({ nombre, descripcion, imagen }) => {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.desc}>{descripcion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
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