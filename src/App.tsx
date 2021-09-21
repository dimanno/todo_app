import React, {useState} from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {TodoForm} from "./components/Todo form/Todo.form";
import {TodoList} from "./components/Todo list/Todo.list";
import {ITodo} from "./interfaces/todo.interface";


const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title:string) => {
        console.log('add New todo', title)
        let newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos]) // стейти і пропси у реакті працюють асинхронно, тому подібний запис не гарантує, що ми працюємо із попереднім стейтом
        setTodos(prev => [newTodo, ...prev]) // такий запис сета кращий оскільки гарантує, що ми працюємо на основі попереднього стейту
    }
  return (
      <div>
        <Navbar />
        <div className={'container'}>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos}/>
        </div>
      </div>
  );
}

export default App;
