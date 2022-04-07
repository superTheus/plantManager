import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

export function Footer() {
    return (
        <Container>
            <AreaMyPlants>
                <IconMyPlantsManager name="list" />
                <TextMyPlantsManager> Minhas plantinhas </TextMyPlantsManager>
            </AreaMyPlants>
            <AreaMyPlants>
                <IconMyPlantsNew name="plus-circle" />
                <TextNewPlants> Nova Planta </TextNewPlants>
            </AreaMyPlants>
        </Container>
    );
}

const Container = styled.View`
    height: 88px;
    width: 100%;
    padding: 24px 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const AreaMyPlants = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TextMyPlantsManager = styled.Text`
    font-family: ${fonts.text};
    font-size: 15px;
    line-height: 15px;
    margin-left: 14px;
    color: ${colors.greenSoft};
`;

const IconMyPlantsManager = styled(Feather)`
    font-family: ${fonts.text};
    font-size: 20px;
    line-height: 15px;
    margin-left: 14px;
    color: ${colors.greenSoft};
`;

const IconMyPlantsNew = styled(IconMyPlantsManager)`
    color: ${colors.green};
`;

const TextNewPlants = styled(TextMyPlantsManager)`
    color: ${colors.green};
`;