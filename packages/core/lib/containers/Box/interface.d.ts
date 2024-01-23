import { HtmlHTMLAttributes, ReactNode } from "react";
export interface BoxPropsInterface extends HtmlHTMLAttributes<HTMLElement> {
    display?: 'flex' | 'block' | 'grid';
    children?: ReactNode;
    flexDirection?: 'row' | 'column';
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    maxWidth?: string;
    gap?: string;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    bg?: string;
    as?: string;
    padding?: string;
    margin?: string;
    height?: string;
    gridTemplateColumns?: string;
}
