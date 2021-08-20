import styled from 'styled-components';

export const MainHeader = styled.header`
    background-color: rgba(100, 100, 100, .01);
    padding-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.lighter};
`;
