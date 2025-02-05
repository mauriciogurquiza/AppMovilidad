import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Pedidos({ navigation }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      const response = await fetch('http://192.168.170.64:3000/api/pedidos');
      const data = await response.json();
      setPedidos(data);
    };

    fetchPedidos();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetallePedido', { pedido: item })}
    >
      <Text style={styles.title}>Pedido #{item.id}</Text>
      <Text style={styles.text}>Origen: {item.origen}</Text>
      <Text style={styles.text}>Destino: {item.destino}</Text>
      <Text style={styles.text}>Estado: {item.estado}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pedidos</Text>
      <FlatList
        data={pedidos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
});
