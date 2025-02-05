import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

export default function PedidosScreen() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [pedidos, setPedidos] = useState([]); // Lista de pedidos activos
  const [historial, setHistorial] = useState([]); // Lista de pedidos completados

  // Simular carga inicial de pedidos
  useEffect(() => {
    // Simula pedidos activos
    setPedidos([
      { id: 1, origen: 'Calle 1', destino: 'Calle 2', estado: 'Pendiente' },
      { id: 2, origen: 'Calle 3', destino: 'Calle 4', estado: 'Pendiente' },
    ]);

    // Simula historial de pedidos completados
    setHistorial([
      { id: 3, origen: 'Calle 5', destino: 'Calle 6', estado: 'Completado' },
    ]);
  }, []);

  // Manejar solicitud de movilidad
  const solicitarMovilidad = () => {
    if (!origen || !destino) {
      Alert.alert('Error', 'Por favor, ingresa un origen y un destino.');
      return;
    }

    const nuevoPedido = {
      id: Date.now(), // Usar un ID único
      origen,
      destino,
      estado: 'Pendiente',
    };

    setPedidos([...pedidos, nuevoPedido]);
    setOrigen('');
    setDestino('');
    Alert.alert('Éxito', 'Movilidad solicitada con éxito.');
  };

  // Manejar cancelación de pedido
  const cancelarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
    Alert.alert('Éxito', 'Pedido cancelado con éxito.');
  };

  // Manejar modificación de pedido
  const modificarPedido = (id) => {
    const pedidoAModificar = pedidos.find((pedido) => pedido.id === id);

    setOrigen(pedidoAModificar.origen);
    setDestino(pedidoAModificar.destino);

    cancelarPedido(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Movilidad</Text>

      {/* Formulario de solicitud */}
      <TextInput
        style={styles.input}
        placeholder="Origen"
        value={origen}
        onChangeText={setOrigen}
      />
      <TextInput
        style={styles.input}
        placeholder="Destino"
        value={destino}
        onChangeText={setDestino}
      />
      <TouchableOpacity style={styles.button} onPress={solicitarMovilidad}>
        <Text style={styles.buttonText}>Solicitar</Text>
      </TouchableOpacity>

      {/* Lista de pedidos activos */}
      <Text style={styles.subtitle}>Pedidos Activos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pedidoItem}>
            <Text>Origen: {item.origen}</Text>
            <Text>Destino: {item.destino}</Text>
            <View style={styles.pedidoActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.modifyButton]}
                onPress={() => modificarPedido(item.id)}
              >
                <Text style={styles.actionText}>Modificar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => cancelarPedido(item.id)}
              >
                <Text style={styles.actionText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Historial de pedidos */}
      <Text style={styles.subtitle}>Historial de Pedidos</Text>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pedidoItem}>
            <Text>Origen: {item.origen}</Text>
            <Text>Destino: {item.destino}</Text>
            <Text>Estado: {item.estado}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pedidoItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pedidoActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
    borderRadius: 8,
  },
  modifyButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
