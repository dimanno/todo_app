import {ReactChildren} from "react";

export interface ITodo {
    title: string,
    id: number,
    completed: boolean
    onToggle(id:number): void,
    onRemove(id:number): void,
    key?:any,
    children?: ReactChildren
}