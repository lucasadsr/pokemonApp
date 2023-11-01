import { TPoke } from "../../types";
import { Text, View, Image } from 'react-native';

type propsPoke = {
  data: TPoke;
};

function Pokemon(props: propsPoke) {
  const { name, weight, height, sprites, abilities } = props.data;

  return (
    <View>
      <Text>Name: {name}</Text>
      {sprites.front_default !== null ? ( 
        <Image source={{ uri: sprites.front_default }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text>Weight: {weight}</Text>
      <Text>{height}</Text>
      <Text>Abilities: {abilities.length}</Text>
    </View>
  );
}

export default Pokemon;
