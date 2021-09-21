import React from "react";
import {Todo} from "../Todo/Todo";
import {ITodo} from "../../interfaces/todo.interface";
import './todo.list.css'


type TodoListProps = {
    todos: ITodo[],
    onToggle(id:number): void,
    onRemove: (id:number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos,onRemove, onToggle}) =>  {

    return (
        <div className={'todoListBox'}>
            {todos.map(value => <Todo {...value} key={value.id} onRemove={onRemove} onToggle={onToggle}/>)}
        </div>

    )
}