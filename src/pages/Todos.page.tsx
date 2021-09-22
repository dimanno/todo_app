import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/Todo form/Todo.form";
import {TodoList} from "../components/Todo list/Todo.list";
import {ITodo} from "../interfaces/todo.interface";

declare var confirm: (question: string)=>boolean
export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title:string) => {
        console.log('add New todo', title)
        let newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
            onToggle: toggleHandler,
            onRemove: removeHandler,
        }
        // setTodos([newTodo, ...todos]) // стейти і пропси у реакті працюють асинхронно, тому подібний запис не гарантує, що ми працюємо із попереднім стейтом
        setTodos(prev => [newTodo, ...prev]) // такий запис сета кращий оскільки гарантує, що ми працюємо на основі попереднього стейту
    }

    const toggleHandler = (id:number) => {
        setTodos(prev => prev.map(value => {
                    if (value.id === id) {
                        value.completed = !value.completed
                    }
                    console.log(value)
                    return value
                }
            )
        )
    }
    const removeHandler = (id:number) => {
        const shoudRemove = confirm('Are You sure to remove element?')
        if (shoudRemove) {
            setTodos(prev => prev.filter(value => value.id !== id))
        }
    }
  return (
      <>
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos}
                    onRemove={removeHandler}
                    onToggle={toggleHandler}/>
      </>
  )
}