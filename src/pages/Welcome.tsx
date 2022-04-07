import React from "react";
import { Image, Platform } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/types";
import { useNavigation } from "@react-navigation/native";

import WateringImg from '../assets/watering.png';
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

type navigateProps = NativeStackNavigationProp<
  StackParamList,
  'UserIdentification'
>;

const Welcome = () => {
    const navigation = useNavigation<navigateProps>();

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <TextWelcome> Gerencie suas plantas de forma fácil  </TextWelcome>

            <Image source={WateringImg} />

            <TextSecondary>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
            </TextSecondary>

            <ButtonGo activeOpacity={0.6} onPress={() => {
                navigation.navigate('UserIdentification');
            }} >
                <TextButton name="chevron-right" />
            </ButtonGo>

        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 45px;
`;

const TextWelcome = styled.Text`
    width: 222px;
    font-family: ${fonts.heading};
    font-style: normal;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${colors.title};
`;

const TextSecondary = styled.Text`
    font-family: ${fonts.text};
    font-style: normal;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: ${colors.paragraph};
`;

const ButtonGo = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: ${colors.green};
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

const TextButton = styled(Feather)`
    color: ${colors.white};
    font-size: 24px;
`;

export default Welcome;