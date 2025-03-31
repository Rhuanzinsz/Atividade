import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Carros = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros Clássicos</Text>
      <View style={styles.carContainer}>
        <Image
          source={require('./assets/146.jpg')}
          style={styles.carImage}
        />
        <Text style={styles.carName}>Ferrari</Text>
        <Text style={styles.carDescription}>Um design agressivo e motor indomavel.</Text>
      </View>
      <View style={styles.carContainer}>
        <Image
          source={require('./assets/154.jpg')}
          style={styles.carImage}
        />
        <Text style={styles.carName}>Mustang</Text>
        <Text style={styles.carDescription}>Um muscle car americano lendário, com motor V8 potente e design agressivo.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carContainer: {
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  carDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Carros;