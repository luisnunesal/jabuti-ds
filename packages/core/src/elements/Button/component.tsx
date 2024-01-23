import React from 'react';

import { ButtonPropsInterface } from './interface';
import { ButtonStyle } from './style'

export const ButtonComponent = (props: ButtonPropsInterface) => {
    return(
        <ButtonStyle 
            display={props.display} 
            justifyContent={props.justifyContent} 
            alignItems={props.justifyContent} 
            flexDirection='row' 
            size={props.size}
            variant={props.variant}
            fullWidth={props.fullWidth}
            {...props}
            >
                {props.children}
            
            </ButtonStyle>
    )
}