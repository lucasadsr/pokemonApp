import { TPoke } from "../../types";
import { Name, NoImageText, PokemonContainer, PokemonPicture, Status, StatusContainer } from "./style";

type propsPoke = {
  data: TPoke;
};

function Pokemon(props: propsPoke) {
  const { name, weight, height, sprites, abilities } = props.data;

  return (
    <PokemonContainer>
      <Name>{name}</Name>
      {sprites.front_default !== null ? (
        <PokemonPicture source={{ uri: sprites.front_default }} style={{ width: '100%', height: 240 }} />
      ) : (
        <NoImageText>No image available</NoImageText>
      )}
      <StatusContainer>
        <Status>Peso: {weight / 10}Kg</Status>
        <Status>Altura: {height / 10}m</Status>
        <Status>Habilidades: {abilities.length}</Status>
      </StatusContainer>
    </PokemonContainer>
  );
}

export default Pokemon;
