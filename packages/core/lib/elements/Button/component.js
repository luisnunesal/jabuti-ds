import React from 'react';
import { ButtonStyle } from './style';
export const ButtonComponent = (props) => {
    return (React.createElement(ButtonStyle, { display: props.display, justifyContent: props.justifyContent, alignItems: props.justifyContent, flexDirection: 'row', size: props.size, variant: props.variant, fullWidth: props.fullWidth, ...props }, props.children));
};
//# sourceMappingURL=component.js.map