import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import BarraBusqueda from './src/components/BarraBusqueda';
import { REINOS } from './src/data/reinos';
import { ReinoCard } from './src/components/ReinoCard';
import { MAGOS } from './src/data/magos';
import { MagoCard } from './src/components/MagoCard';
import { MAGOS_DESTACADOS } from './src/data/magosDestacados';
import { MagoDestacadoCard } from './src/components/MagoDestacado';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <BarraBusqueda placeholder="Busca ubicación o mago con el que entrenar" />

        <Text style={styles.sectionTitle}>Reinos disponibles:</Text>
        <FlatList
          data={REINOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReinoCard
              nombre={item.nombre}
              descripcion={item.descripcion}
              imagen={item.imagen}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={{ maxHeight: 200 }}
        />

        <Text style={styles.sectionTitle}>Magos que estén interesados en ayudarte:</Text>
        <FlatList
          data={MAGOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MagoCard
              nombre={item.nombre}
              descripcion={item.descripcion}
              imagen={item.imagen}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={{ maxHeight: 300 }}
        />

        <Text style={styles.sectionTitle}>Magos destacados de la semana:</Text>
        <FlatList
          data={MAGOS_DESTACADOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MagoDestacadoCard
              nombre={item.nombre}
              descripcion={item.descripcion}
              imagen={item.imagen}
            />
          )}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 80 }} 
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.tab}>
          <Image source={require('./assets/grimorio.png')} style={styles.icon} />
          <Text style={styles.tabText}>Buscar</Text>
        </View>
        <View style={styles.tab}>
          <Image source={require('./assets/espadas.png')} style={styles.icon} />
          <Text style={styles.tabText}>Intercambios</Text>
        </View>
        <View style={styles.tab}>
          <Image source={require('./assets/nero.png')} style={styles.icon} />
          <Text style={styles.tabText}>Mensajes</Text>
        </View>
        <View style={styles.tab}>
          <Image source={require('./assets/toronegro.png')} style={styles.icon} />
          <Text style={styles.tabText}>Cuenta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 15 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: { alignItems: 'center', justifyContent: 'center' },
  icon: { width: 24, height: 24, resizeMode: 'contain', marginBottom: 4 },
  tabText: { fontSize: 12, color: '#333' },
});





