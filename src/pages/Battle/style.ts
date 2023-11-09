import { Camera } from 'expo-camera';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`;

export const CameraComponent = styled(Camera)`
display: flex;
align-items: flex-end;
justify-content: flex-end;
position: absolute;
width: 100%;


`;

export const ButtonContainer = styled.TouchableOpacity`
width: 22%;
padding: 20px;

`;

export const ButtonCamera = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: 20%;
padding: 20px;
background-color: #FFD700;
border-radius: 19px;
margin-top: 50%;
`;



