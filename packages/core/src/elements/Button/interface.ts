import { BoxPropsInterface } from "../../containers/Box/interface";

export interface ButtonPropsInterface extends BoxPropsInterface {
    children: string | React.ReactNode;
    size?: 'small' | 'normal'|'large' | undefined;
    fullWidth?: boolean;
    variant?: 'outlined'|'linked'
    status?: 'note' | 'tip' | 'info' | 'warning' | 'danger'
}