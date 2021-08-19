import styled from 'styled-components';


interface iRow {
    wrap?: string 
    items?: string
    content?: string
    direction?: string 
}

export const Row = styled.div<iRow>`
    display: flex;
    width: 100%;
    flex-wrap: ${(props) => props.wrap || 'wrap'};
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.items || 'flex-start'};
    justify-content: ${(props) => props.content || 'flex-start'};
`

interface iRowItem {
    spacing: number
}

export const RowItem = styled.div<iRowItem>`
    flex: 0 0 ${(props) => props.spacing * 8.333}%;
    width: ${(props) => props.spacing * 8.333}%;
`
