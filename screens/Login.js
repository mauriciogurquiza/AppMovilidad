import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen (){
  return (
    <ImageBackground 
      source={require('../assets/imagenes/logoGuaymallen_extended.jpg')} // Imagen local
      style={styles.background}
      blurRadius={2} // Ajusta el nivel de desenfoque
      imageStyle={styles.imagePosition} // Aplicar zoom a la imagen
    >
      <View style={styles.overlayContainer}>

        {/* Formulario de login */}
        <View style={styles.loginContainer}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
          
          {/* Campo de Usuario */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Campo de Contraseña */}
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />

          {/* Botón de Login */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePosition: {
    transform: [
      { scale: 1.40 }, // Aplicar zoom
      { translateY: -120 }, // Mover imagen hacia arriba
    ],
  },
  overlayContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 0, 128, 0.5)', // Fondo translúcido
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 50, // Separación entre el encabezado y el formulario
  },
  loginContainer: {
    transform: [
      { scale: 1 }, // Aplicar zoom
      { translateY: 100 }, // Mover imagen hacia arriba
    ],
    width: '90%', // Ajustar el ancho del formulario
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco translúcido
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6a1b9a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
