import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const Cyberpunk2077Page = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/cyberpunk2.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>Cyberpunk 2077</Text>
      <Text style={styles.pageDescription}>
        Em um futuro distópico, Night City é um playground para V, um mercenário em busca de um implante que garante a imortalidade. Explore, lute e decida o destino desta metrópole sombria.
      </Text>
    </View>
  );
};

const TheLastOfUsPartIIPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/TLOUPART2.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>The Last of Us Part II</Text>
      <Text style={styles.pageDescription}>
        UmaThe Last of Us Part II é um jogo de ação-aventura intenso e emocionalmente carregado. Explora temas de vingança, perda e redenção em um mundo pós-apocalíptico brutal. A narrativa complexa e os personagens multifacetados geram debates e reflexões profundas.
      </Text>
    </View>
  );
};

const DemonsSoulsPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/demonsouls.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>Demon's Souls</Text>
      <Text style={styles.pageDescription}>
      Demon's Souls, RPG de ação da FromSoftware, é conhecido por sua dificuldade, atmosfera sombria e design de níveis complexo. Situado em Boletaria, o jogador luta contra demônios em um mundo interconectado, com morte punitiva e sistema de tendências influente.
      </Text>
    </View>
  );
};

const HaloInfinitePage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/haloinfinite.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>Halo Infinite</Text>
      <Text style={styles.pageDescription}>
      Halo Infinite traz o Master Chief em mundo aberto no anel Halo Zeta, lutando contra os Banidos. Com gancho de agarramento e multiplayer gratuito, o jogo equilibra campanha e modos online.
      </Text>
    </View>
  );
};

const ForzaHorizon5Page = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/forza.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>Forza Horizon 5</Text>
      <Text style={styles.pageDescription}>
      Forza Horizon 5, um jogo de corrida de mundo aberto da Playground Games, leva os jogadores ao México com paisagens deslumbrantes, carros personalizáveis e corridas emocionantes. É um festival de velocidade e diversão.
      </Text>
    </View>
  );
};

const RatchetClankPage = ({ onGoBack }) => {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require('./assets/Ratchet.jpg')} style={styles.pageImage} />
      <Text style={styles.pageTitle}>Ratchet & Clank: Rift Apart</Text>
      <Text style={styles.pageDescription}>
      Ratchet & Clank: Rift Apart é um jogo de ação e aventura exclusivo para PS5, onde os jogadores exploram dimensões alternativas com gráficos impressionantes, jogabilidade fluida e uma história emocionante.
      </Text>
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
  pageImage: {
    width: '50%',
    height: '50%',
    borderRadius: 50,
    marginBottom: 50,
  } 
});

export default App;