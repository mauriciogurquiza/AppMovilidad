import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import * as Location from 'expo-location';

// Solo importar react-native-maps si NO es web
let MapView, Marker;
if (Platform.OS !== 'web') {
  MapView = require('react-native-maps').default;
  Marker = require('react-native-maps').Marker;
}

export default function MapScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permiso denegado para acceder a la ubicación.');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setLoading(false);
      } catch (error) {
        setErrorMsg('Error al obtener la ubicación.');
        setLoading(false);
      }
    })();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text>El mapa no está disponible en la versión web.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#6a1b9a" />
      ) : errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : (
        currentLocation && (
          <MapView style={styles.map} initialRegion={currentLocation}>
            <Marker coordinate={currentLocation} title="Tu ubicación" />
          </MapView>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});
