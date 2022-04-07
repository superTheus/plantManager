import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Keyboard, Platform, TouchableWithoutFeedback, View } from "react-native";
import styled from 'styled-components/native';
import ButtonPrimary from "../Components/ButtonPrimary";
import { StackParamList } from "../routes/types";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { SaveUserName } from "../utils/Saves";

interface StyledInput {
    setActive: boolean
}

type navigateProps = NativeStackNavigationProp<
    StackParamList,
    'ConfirmationName'
>;

export function UserIdentification() {
    const navigation = useNavigation<navigateProps>();

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inputFocus, setInputFocus] = useState(false);

    const [userName, setUserName] = useState("");

    function handlerFocus() {
        setInputFocus(true);
    }

    function handlerBlur() {
        setInputFocus(false);
    }

    function handlerConfirmation(value: string) {
        setUserName(value);

        if (!!value)
            setButtonDisabled(false);
        else
            setButtonDisabled(true);
    }

    async function saveUSer() {
        if(await SaveUserName(userName)){
            navigation.navigate('ConfirmationName');
        };
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TextEmoji>
                        😊
                    </TextEmoji>

                    <ViewTitle>
                        <TextTitle>
                            Como podemos
                            chamar você?
                        </TextTitle>
                    </ViewTitle>

                    <InputName
                        setActive={inputFocus}
                        placeholder="Digite seu Nome"
                        onFocus={handlerFocus}
                        onBlur={handlerBlur}
                        onChangeText={handlerConfirmation}
                    />

                    <ButtonPrimary
                        textOfButton="Confirmar"
                        disabled={buttonDisabled}
                        onPress={saveUSer}
                    />
            </Container>
        </TouchableWithoutFeedback>
    );
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px 56px;
`;

const ViewTitle = styled.View`
    margin-top: 20px;
    width: 200px;
    align-items: center;
    justify-content: center;
`;

const TextEmoji = styled.Text`
    font-size: 24px;
`;

const TextTitle = styled.Text`
    font-family: ${fonts.heading};
    text-align: center;
    font-style: normal;
    font-size: 24px;
    line-height: 32px;
    color: ${colors.title};
`;

const InputName = styled.TextInput<StyledInput>`
    margin-top: 50px;
    padding: 10px;
    font-size: 18px;
    width: 100%;
    border-bottom-color: ${(props: StyledInput) => props.setActive ? colors.green : colors.gray};
    border-bottom-width: 2px;
    text-align: center;
`;