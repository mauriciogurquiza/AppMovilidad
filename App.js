import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './screens/Inicio';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Registro';
import MapScreen from './screens/MapScreen';
import MovilidadesScreen from './screens/Movilidades';
import PedidosScreen from './screens/PedidosScreen';
import AreasScreen from './screens/AreasScreen';
import UsuariosScreen from './screens/Usuarios';
import Pedidos from './screens/Pedidos';

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

        {/* Pantalla de Registro */}
        <Stack.Screen 
          name="Registro" 
          component={RegisterScreen} 
          options={{ title: 'Registrarme' }} 
        />

        {/* Pantalla de Mapa */}
        <Stack.Screen 
          name="Mapa" 
          component={MapScreen} 
          options={{ title: 'Mapa' }} 
        />

        {/* Pantalla de Movilidades */}
        <Stack.Screen 
          name="Movilidades" 
          component={MovilidadesScreen} 
          options={{ title: 'Movilidades' }} 
        />

        {/* Pantalla de Pedidos */}
        <Stack.Screen 
          name="Pedidos" 
          component={Pedidos} 
          options={{ title: 'Pedidos' }} 
        />

        {/* Pantalla de Áreas */}
        <Stack.Screen 
          name="Areas" 
          component={AreasScreen} 
          options={{ title: 'Areas' }} 
        />

        {/* Pantalla de Usuarios */}
        <Stack.Screen 
          name="Usuarios" 
          component={UsuariosScreen} 
          options={{ title: 'Usuarios' }} 
        />

        {/* Pantalla de PedidosScreen */}
        <Stack.Screen 
          name="PedidosScreen" 
          component={PedidosScreen} 
          options={{ title: 'PedidosScreen' }} 
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}