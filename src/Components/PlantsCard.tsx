import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

interface PlantsCardProps extends TouchableOpacityProps {
    image: string,
    name: string,
}

export function PlantsCard({ image, name, ...rest }: PlantsCardProps) {
    console.log(image);
    return (
        <Container activeOpacity={0.6}>
            <ImagePlant source={require("../assets/plants/plant_1.png")} />
            <TextPlant>
                {name}
            </TextPlant>
        </Container>
    );
}

const Container = styled.TouchableOpacity`
    background-color: ${colors.shape};
    justify-content: space-between;
    align-items: center;
    height: 154px;
    padding: 15px 38px;
    border-radius: 20px;
`;

const ImagePlant = styled.Image`
    width: 74px;
    height: 90px;
`;

const TextPlant = styled.Text`
    color: ${colors.title};
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    font-family: ${fonts.heading};
`;