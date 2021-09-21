import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {TodoForm} from "./components/Todo form/Todo.form";


const App: React.FC = () => {
  return (
      <div>
        <Navbar />
        <div className={'container'}>
            <TodoForm/>
        </div>
      </div>
  );
}

export default App;
