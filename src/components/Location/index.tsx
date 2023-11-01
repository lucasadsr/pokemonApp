import { TCep } from "../../types";
import { Text } from 'react-native';

type propsCep = {
  data: TCep;
};


function Location(props: propsCep) {
  return ( 
    <>
     <Text>local</Text> 
      <Text>{props.data.logradouro}</Text>
      <Text>{props.data.bairro}</Text>
      <Text>{props.data.localidade}</Text>
      <Text>{props.data.uf}</Text>

    </>
   );
}

export default Location;