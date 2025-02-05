import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>
      <Text style={styles.subtitle}>Selecciona una opción para continuar</Text>
      
      {/* Botón Iniciar Sesión */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')} // Navegar a la pantalla de Login
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Botón Registrarme */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Registro')} // Navegar a la pantalla de Registro
      >
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

    {/* Botón Mapas */}
      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Mapa')} // Cambia 'Mapa' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Abrir Mapa</Text>
      </TouchableOpacity>

    {/* Botón Registro */}
      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Registro')} // Cambia 'Mapa' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>

    {/* Botón Movilidades */}
      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Movilidades')} // Cambia 'Mapa' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Movilidades</Text>
      </TouchableOpacity>

    {/* Botón Pedidos */}
    <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PedidosScreen')} // Cambia 'Pedidos' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Pedidos</Text>
      </TouchableOpacity> 

    {/* Botón Areas */}
    <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Areas')} // Cambia 'Áreas' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Areas</Text>
      </TouchableOpacity>  

    {/* Botón Usuarios */}
    <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Usuarios')} // Cambia 'Usuarios' por el nombre de otra pantalla
        >
          <Text style={styles.buttonText}>Usuarios</Text>
      </TouchableOpacity>  
      
    
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
