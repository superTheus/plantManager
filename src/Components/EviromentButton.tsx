import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

interface EviromentButtonProps extends TouchableOpacityProps {
    text: string,
    active?: boolean;
};

interface StyleProps {
    active: boolean
}

export function EviromentButton ({text, active = false}: EviromentButtonProps) {
    return (
        <Container activeOpacity={0.6} active={active}>
            <TextButton active={active}>
                {text}
            </TextButton>
        </Container>
    );    
}

const Container = styled.TouchableOpacity<StyleProps>`
    width: auto;
    padding: 0px 18px;
    height: 40px;
    background-color: ${(props: StyleProps) => props.active ? colors.greenLight : colors.shape};
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 3px;
`;

const TextButton = styled.Text<StyleProps>`
    font-family: ${(props: StyleProps) => props.active ? fonts.heading : fonts.text};
    font-style: normal;
    font-size: 13px;
    line-height: 23px;
    color: ${(props: StyleProps) => props.active ? colors.greenDark : colors.title};
`;