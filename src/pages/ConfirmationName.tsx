import React from "react";
import styled from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonPrimary from "../Components/ButtonPrimary";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { StackParamList } from "../routes/types";
import { useNavigation } from "@react-navigation/native";

type navigateProps = NativeStackNavigationProp<
    StackParamList,
    'ConfirmationName'
>;

export function ConfirmationName() {
    const navigation = useNavigation<navigateProps>();

    return (
        <Container>
            <TextEmoji> 😁👍 </TextEmoji>
            <TextTitle> Prontinho </TextTitle>
            <TextParagraph>
                Agora vamos começar a cuidar das suas
                plantinhas com muito cuidado.
            </TextParagraph>
            <ButtonPrimary
                textOfButton="Começar"
                onPress={() => { navigation.navigate('PlantSelect') }}
            />
        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;

const TextEmoji = styled.Text`
    font-size: 50px;
`;

const TextTitle = styled.Text`
    margin-top: 30px;
    font-family: ${fonts.heading};
    font-size: 24px;
    line-height: 30px;
    color: ${colors.title};
`;

const TextParagraph = styled.Text`
    font-family: ${fonts.heading};
    font-size: 17px;
    line-height: 30px;
    color: ${colors.paragraph};
    width: 100%;
    text-align: center;
`;