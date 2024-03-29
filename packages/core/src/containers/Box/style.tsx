import styled from 'styled-components';
import { BoxPropsInterface } from './interface';

export const DefaultBoxStyle = styled.div.attrs<Pick<BoxPropsInterface, "as">>((props) => ({
    as: props.as
}))<BoxPropsInterface>`
    ${(props) => props.display && `display: ${props.display}`};
    ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
    ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
    ${(props) => props.width && `width: ${props.width}`};
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
    ${(props) => props.height && `height: ${props.height}`};
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.bg && `background-color: ${props.bg}`};
    ${(props) => props.padding && `padding: ${props.padding}`};
    ${(props) => props.margin && `margin: ${props.margin}`};
    ${(props) => props.gridTemplateColumns && `display: ${props.gridTemplateColumns}`};
`;