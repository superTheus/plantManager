import { Text, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
    textOfButton: String;
}


const ButtonPrimary: React.FC<ButtonProps> = ({ textOfButton, ...rest }:ButtonProps ) => {
    return (
        <ButtonPrimaryStyle activeOpacity={0.6} {...rest}>
            <ButtonPrimaryText> {textOfButton} </ButtonPrimaryText>
        </ButtonPrimaryStyle>
    );
}

const ButtonPrimaryStyle = styled.TouchableOpacity`
    width: 231px;
    height: 56px;
    border-radius: 16px;
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    opacity: 6;
`;

const ButtonPrimaryText = styled.Text`
    font-family: ${fonts.text};
    font-style: normal;
    font-size: 17px;
    line-height: 23px;
    color: ${colors.white};
`;

export default ButtonPrimary;