import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TodosPage} from "./pages/Todos.page"
import {IdeaPage} from "./pages/Idea.page"

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Navbar />
        <div className={'container'}>
            <Switch>
                <Route component={TodosPage} path={'/'} exact/>
                <Route component={IdeaPage} path={'/idea'}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
