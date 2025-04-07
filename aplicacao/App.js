import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const Cyberpunk2077Page = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Cyberpunk 2077</Text>
      <Text style={styles.pageDescription}>
        Um RPG de ação de mundo aberto ambientado em Night City.
      </Text>
      {}
    </View>
  );
};

const TheLastOfUsPartIIPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>The Last of Us Part II</Text>
      <Text style={styles.pageDescription}>
        Uma sequência emocionante e brutal do aclamado jogo de ação e aventura.
      </Text>
      {}
    </View>
  );
};

const DemonsSoulsPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Demon's Souls</Text>
      <Text style={styles.pageDescription}>
        Um remake impressionante do clássico jogo de RPG de ação.
      </Text>
      {}
    </View>
  );
};

const HaloInfinitePage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Halo Infinite</Text>
      <Text style={styles.pageDescription}>
        O mais novo capítulo da saga Halo, com uma campanha épica e multiplayer intenso.
      </Text>
      {}
    </View>
  );
};

const ForzaHorizon5Page = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Forza Horizon 5</Text>
      <Text style={styles.pageDescription}>
        Um jogo de corrida de mundo aberto com paisagens deslumbrantes e carros incríveis.
      </Text>
      {}
    </View>
  );
};

const RatchetClankPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Ratchet & Clank: Rift Apart</Text>
      <Text style={styles.pageDescription}>
        Uma aventura interdimensional com gráficos impressionantes e jogabilidade divertida.
      </Text>
      {}
    </View>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const jogosData = [
    {
      name: 'Cyberpunk 2077',
      description: 'Um RPG de ação de mundo aberto ambientado em Night City.',
      image: require('./assets/cyberpunk.jpg'),
      page: 'Cyberpunk2077Page',
    },
    {
      name: 'The Last of Us Part II',
      description: 'Uma sequência emocionante e brutal do aclamado jogo de ação e aventura.',
      image: require('./assets/tlou2.jpg'),
      page: 'TheLastOfUsPartIIPage',
    },
    {
      name: 'Demon\'s Souls',
      description: 'Um remake impressionante do clássico jogo de RPG de ação.',
      image: require('./assets/demonsouls.jpg'),
      page: 'DemonsSoulsPage',
    },
    {
      name: 'Halo Infinite',
      description: 'O mais novo capítulo da saga Halo, com uma campanha épica e multiplayer intenso.',
      image: require('./assets/haloinfinite.jpg'),
      page: 'HaloInfinitePage',
    },
    {
      name: 'Forza Horizon 5',
      description: 'Um jogo de corrida de mundo aberto com paisagens deslumbrantes e carros incríveis.',
      image: require('./assets/forzahorizon5.jpg'),
      page: 'ForzaHorizon5Page',
    },
    {
      name: 'Ratchet & Clank: Rift Apart',
      description: 'Uma aventura interdimensional com gráficos impressionantes e jogabilidade divertida.',
      image: require('./assets/ratchetclank.jpg'),
      page: 'RatchetClankPage',
    },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'Cyberpunk2077Page':
        return <Cyberpunk2077Page onGoBack={() => setCurrentPage(null)} />;
      case 'TheLastOfUsPartIIPage':
        return <TheLastOfUsPartIIPage onGoBack={() => setCurrentPage(null)} />;
      case 'DemonsSoulsPage':
        return <DemonsSoulsPage onGoBack={() => setCurrentPage(null)} />;
      case 'HaloInfinitePage':
        return <HaloInfinitePage onGoBack={() => setCurrentPage(null)} />;
      case 'ForzaHorizon5Page':
        return <ForzaHorizon5Page onGoBack={() => setCurrentPage(null)} />;
      case 'RatchetClankPage':
        return <RatchetClankPage onGoBack={() => setCurrentPage(null)} />;
      default:
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Jogos</Text>
            {jogosData.map((jogo, index) => (
              <TouchableOpacity
                key={index}
                style={styles.jogoContainer}
                onPress={() => setCurrentPage(jogo.page)}
              >
                <View style={styles.imageContainer}>
                  <Image source={jogo.image} style={styles.jogoImage} />
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.jogoName}>{jogo.name}</Text>
                    <Text style={styles.jogoDescription}>{jogo.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
    }
  };

  return <View style={{ flex: 1 }}>{renderPage()}</View>;
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
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  jogoImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  descriptionContainer: {
    flex: 1,
  },
  jogoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jogoDescription: {
    fontSize: 16,
  },
  pageContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pageDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
  },
});

export default App;