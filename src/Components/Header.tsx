import styled from "styled-components/native";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

import EuImg from "../assets/eu.webp";
import { View } from "react-native";

interface HeaderProps {
    name: String;
}

export function Header({name}: HeaderProps) {
    return (
        <ContainerHeader>
            <View>
                <TextHello> Olá, </TextHello>
                <TextName> {name} </TextName>
            </View>

            <ImgPerfil source={EuImg} />
        </ContainerHeader>
    );
}

const ContainerHeader = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding-top: 50px;
`;

const TextHello = styled.Text`
    font-family: ${fonts.text};
    font-style: normal;
    font-size: 24px;
    line-height: 36px;
    color: ${colors.title};
`;

const TextName = styled(TextHello)`
    font-family: ${fonts.heading};
`;

const ImgPerfil = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`;