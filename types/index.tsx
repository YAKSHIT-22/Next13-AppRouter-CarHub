import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyle?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:'button'|'submit'|'reset';
}
export interface CustomFilter {
    title:string;
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}