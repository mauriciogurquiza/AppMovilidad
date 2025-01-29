import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './screens/Inicio'; // Nueva pantalla de inicio
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Registro';
//import MapScreen from './screens/MapScreen'; // Pantalla del mapa (si ya la creaste)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        {/* Pantalla de Inicio */}
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: 'Inicio', headerShown: false }} 
        />

        {/* Pantalla de Login */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Iniciar sesión' }} 
        />

        {/* Pantalla de Registro (aún por crear) */}
        <Stack.Screen 
          name="Registro" 
          component={RegisterScreen} 
          options={{ title: 'Registrarme' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
