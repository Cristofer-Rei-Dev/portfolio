import styled from 'styled-components';
import { colorName } from '.';


interface iText {
    color?: colorName
    size?: string
    weight?: number
    decoration?: string
}

export const Text = styled.p<iText>`
    font-family: Helvetica, Arial, sans-serif;
    ${(props) => props.color ? `color: ${props.theme[props.color]};` : ''}
    font-size: ${(props) => props.size ? props.size : '1rem'};
    font-weight: ${(props) => props.weight ? props.weight : '500'};
    ${(props) => props.decoration ? `text-decoration: ${props.decoration};` : ''}

`;
