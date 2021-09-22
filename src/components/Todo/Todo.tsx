import React from "react";
import './todo.css'
import {ITodo} from "../../interfaces/todo.interface";

export const Todo = (props: ITodo) => {
    const {id, title, completed, onToggle, onRemove} = props
    const classes = ['todoBox']
    if (completed){
        classes.push('completed')
    }

    const removeHandler = (event: React.MouseEvent, id: number)=>{
        event.preventDefault()
        onRemove(id)
    }

  return(
          <li className={classes.join(' ')} key={id}>
              <label>
                  <input type="checkbox" checked={completed}
                         // onChange={onToggle.bind(null, id)}
                         onChange={()=>onToggle(id)}
                  />
                  <span>{title}</span>
                  <i className={'material-icons red-text'}
                     // onClick={()=> onRemove(id)}
                     onClick={event => removeHandler(event, id)}
                  >delete</i>
              </label>
          </li>
  )
}