import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Footer } from "../Components/Footer";

import { Header } from "../Components/Header";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { GetUserName } from "../utils/Saves";
import { EviromentButton } from "../Components/EviromentButton";
import { PlantsCard } from "../Components/PlantsCard";
import { FlatList } from "react-native";

const Places = [
    {
        id: 0,
        title: 'Todos',
    },
    {
        id: 1,
        title: 'Sala',
    },
    {
        id: 2,
        title: 'Cozinha',
    },
    {
        id: 3,
        title: 'Meu quarto',
    },
    {
        id: 4,
        title: 'Quintal',
    },
    {
        id: 5,
        title: 'Banheiro',
    },
    {
        id: 6,
        title: 'Segundo Quarto',
    },
    {
        id: 7,
        title: 'Banheiro na Cozinha',
    },
    {
        id: 8,
        title: 'Varanda',
    },
    {
        id: 9,
        title: 'Quintal dos Fundos',
    },
];

export function PlantSelect() {
    const [userName, setUserName] = useState("Theus");

    const [buttonActive, setButtonActive] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            handlerName()
        },
            [userName]));

    async function handlerName() {
        const name = await GetUserName();

        if (name) {
            setUserName(name);
        }
    }

    const ItemPlace = ({ title }: any) => (
        <EviromentButton
            text={title}
        />
    );

    const renderItem = ({ item }: any) => (
        <ItemPlace title={item.title} />
    );

    return (
        <>
            <Container>
                <Header name={userName} />

                <ContainerText>
                    <TextMessageLineOne>
                        Em qual ambiente
                    </TextMessageLineOne>
                    <TextMessageLineTwo>
                        você quer colocar sua planta?
                    </TextMessageLineTwo>
                </ContainerText>

                <ListPlaces
                    data={Places}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <PlantsArea>
                    <PlantsCard image="../assets/plants/plant_1.png" name="Imbé" />
                </PlantsArea>

                <FlatList
                    data={[0,1,2,3,5]}
                    renderItem={({item}: any) => {
                        <PlantsCard name="Imbé" image="teste" />
                    }}
                />

            </Container>
            <Footer />
        </>
    );
}

const Container = styled.View`
    flex: 1;
    margin-top: 30px;
    padding: 0px 32px;
`;

const ContainerText = styled.View`
    margin-top: 40px;
    margin-bottom: 32px;
`;

const TextMessageLineOne = styled.Text`
    font-family: ${fonts.heading};
    font-size: 17px;
    line-height: 23px;
    color: ${colors.title};
`;

const TextMessageLineTwo = styled(TextMessageLineOne)`
    font-family: ${fonts.text};
`;

const ListPlaces = styled.FlatList`
    flex: 0.2;
`;

const PlantsArea = styled.View`
    margin-top: 40px;
`;