import { Text, View, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import {
  CameraComponent,
  Container,
  ButtonContainer,
  ButtonCamera
} from '../Battle/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fetchRandomPokemon } from '../../services';

interface Pokemon {
  name: string;
  image: string;
  abilities: number;
  weight: number;
  height: number;
}
{
}

function Battle() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchRandomPokemon();
      const pokemon = {
        name: response.name,
        image: response.sprites.front_default || '',
        abilities: response.abilities.length,
        weight: response.weight,
        height: response.height
      };
      console.log(pokemon);
      setPokemon(pokemon as Pokemon);
    }
    fetchData();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <Container>
      <Text>Battle</Text>
      <View>
        <Text>Ganhou | Perdeu | Empate </Text>
      </View>
      <Text>{pokemon?.name}</Text>
      <Image
        source={{ uri: pokemon?.image }}
        style={{ width: 250, height: 300 }}
      />
      <Text>weight: {pokemon?.weight}</Text>
      <Text>height: {pokemon?.height}</Text>
      <Text>abilities: {pokemon?.abilities}</Text>

      <ButtonCamera onPress={() => setButtonClicked(prevState => !prevState)}>
        <Ionicons name="camera-outline" size={40} color={'#000'}></Ionicons>
      </ButtonCamera>

      {buttonClicked && (
        <CameraComponent type={type} style={{ height: 350, width: 350 }}>
          <ButtonContainer onPress={toggleCameraType}>
            <Ionicons
              name="reload-circle-outline"
              size={40}
              color={'#fff'}
            ></Ionicons>
          </ButtonContainer>
        </CameraComponent>
      )}
    </Container>
  );
}

export default Battle;
