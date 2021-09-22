import React from "react";
import {useHistory} from "react-router-dom";

export const IdeaPage: React.FC = () => {
    const history = useHistory();

   return (
       <>
          <h2>Enter your first Idea</h2>
          <button className={'btn'} onClick={()=>{history.push('/')}}>Back to Todos List</button>
       </>
   )
}