import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovilidadesScreen({ navigation }) {
  const [movilidades, setMovilidades] = useState([]);

  useEffect(() => {
    // Aquí iría la lógica para obtener las movilidades desde la API
    const fetchMovilidades = async () => {
      const response = await fetch('http://192.168.170.64:3000/api/movilidades');
      const data = await response.json();
      setMovilidades(data);
    };

    fetchMovilidades();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalleMovilidad', { movilidad: item })}
    >
      <Text style={styles.title}>{item.marca} - {item.modelo}</Text>
      <Text style={styles.text}>Placa: {item.placa}</Text>
      <Text style={styles.text}>Estado: {item.estado || 'Sin asignar'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movilidades</Text>
      <FlatList
        data={movilidades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AgregarMovilidad')}
      >
        <Text style={styles.addButtonText}>Agregar Movilidad</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  text: { fontSize: 14, marginBottom: 4 },
  addButton: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
