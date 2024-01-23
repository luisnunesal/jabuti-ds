import styled, {css} from 'styled-components';
import { Box } from '../../containers/Box';
import { ButtonPropsInterface } from './interface';
import theme from '../../theme';


const buttonSize = ({size}: any) => {
    switch (size) {
        case 'small': 
            return css`
            height: 3.2rem;
            padding: 0 1.2rem;
        `   
        case 'normal': 
            return css`
            height: 4.4rem;
            padding: 0 1.2rem;
        `
        case 'large': 
            return css`
            height: 5.6rem;
            width: 100%;
        `
        default:  
            return css`
            height: 4.4rem;
            padding: 0 1.2rem;
        `
    }
}

// ----- VARIANTS ----- //

const ButtonContained = () => css`
  color: ${theme.colors.baseLight};
  background: ${theme.colors.primary};
  border-color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.baseLightHover};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.baseLight};
  }

  &:focus {
    color: ${theme.colors.baseLightHover};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.baseLight};

    &:hover {
      border-color: ${theme.colors.baseLightHover};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
        color: ${theme.colors.baseLightHover};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.baseLight};
    }
  }

  &:disabled {
    background: ${theme.colors.disabled};
    border-color: ${theme.colors.disabled};
    color: ${theme.colors.baseDark};
    cursor: default;
  }
`;

const ButtonOutlined = () => css`
  background: transparent;
  color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.baseLight};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  &:focus {
    color: ${theme.colors.baseLight};
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
        border-color: ${theme.colors.primary};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
      background-color: transparent;
      color: ${theme.colors.baseLight};
      border-color: ${theme.colors.primary};
    }
  }

  &:disabled {
    background: ${theme.colors.disabled};
    border-color: ${theme.colors.disabled};
    color: ${theme.colors.baseDark};
    cursor: default;
  }
`;

const ButtonLinked = () => css`
  background: transparent;
  color: ${theme.colors.baseDark};
  border-color: transparent;
  border-radius: none;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }

  &:focus {
    color:  ${theme.colors.primary};
    text-decoration: underline;
  }

  &:active {
    color:  ${theme.colors.primary};
    text-decoration: underline;
  }

  &:disabled {
    color: ${theme.colors.disabled};
    text-decoration: none;
    cursor: default;
  }
`;

export const buttonVariant = ({variant}:any) => {

  switch (variant) {
    case 'outlined':
      return ButtonOutlined();
    case 'linked':
      return ButtonLinked();

    default:
      return ButtonContained();
  }
};

const isFullWidth = css<any>(({ fullWidth }) => ({
  width: fullWidth ? '100%' : 'fit-content',
}));

const BaseButtonStyle = css`

    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Arial, sans-serif';
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.4px;
    border: 1px solid red;
    border-radius: 0.4rem;
    ${buttonSize}
    ${isFullWidth}
    ${buttonVariant}
`;

export const ButtonStyle =  styled(Box).attrs<ButtonPropsInterface>((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))`
    ${BaseButtonStyle}
`;