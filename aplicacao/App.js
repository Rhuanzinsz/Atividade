import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Jogos = () => {
  const jogosData = [
    {
      name: 'Cyberpunk 2077',
      description: 'Um RPG de ação de mundo aberto ambientado em Night City.',
      image: require('./assets/cyberpunk.jpg'),
    },
    {
      name: 'The Last of Us Part II',
      description: 'Uma sequência emocionante e brutal do aclamado jogo de ação e aventura.',
      image: require('./assets/tlou2.jpg'),
    },
    {
      name: 'Demon\'s Souls',
      description: 'Um remake impressionante do clássico jogo de RPG de ação.',
      image: require('./assets/demonsouls.jpg'),
    },
    {
      name: 'Halo Infinite',
      description: 'O mais novo capítulo da saga Halo, com uma campanha épica e multiplayer intenso.',
      image: require('./assets/haloinfinite.jpg'),
    },
    {
      name: 'Forza Horizon 5',
      description: 'Um jogo de corrida de mundo aberto com paisagens deslumbrantes e carros incríveis.',
      image: require('./assets/forzahorizon5.jpg'),
    },
    {
      name: 'Ratchet & Clank: Rift Apart',
      description: 'Uma aventura interdimensional com gráficos impressionantes e jogabilidade divertida.',
      image: require('./assets/ratchetclank.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Jogos</Text>
      {jogosData.map((jogo, index) => (
        <View key={index} style={styles.jogoContainer}>
          <Image source={jogo.image} style={styles.jogoImage} />
          <Text style={styles.jogoName}>{jogo.name}</Text>
          <Text style={styles.jogoDescription}>{jogo.description}</Text>
        </View>
      ))}
    </ScrollView>
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
  jogoContainer: {
    marginBottom: 20,
  },
  jogoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  jogoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  jogoDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Jogos;