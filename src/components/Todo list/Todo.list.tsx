import React from "react";
import {Todo} from "../Todo/Todo";
import {ITodo} from "../../interfaces/todo.interface";



type TodoListProps = {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) =>  {

    return (
        <div>
            {todos.map(value => <Todo item={value} key={value.id}/>)}
        </div>

    )
}