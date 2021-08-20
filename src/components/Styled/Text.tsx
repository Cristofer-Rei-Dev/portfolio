import styled from 'styled-components';
import { colorName } from '.';


interface iText {
    color?: colorName
    size?: string
    weight?: number
    decoration?: string
    align?: string
}

export const Text = styled.p<iText>`
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.size ? props.size : '1rem'};
    font-weight: ${(props) => props.weight ? props.weight : '500'};
    
    ${(props) => props.align ? `text-align: ${props.align};` : ''}
    ${(props) => props.color ? `color: ${props.theme[props.color]};` : ''}
    ${(props) => props.decoration ? `text-decoration: ${props.decoration};` : ''}

`;
