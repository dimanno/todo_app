import React from "react";
import './todo.css'
import {ITodo} from "../../interfaces/todo.interface";

export const Todo = (props:ITodo) => {
  return(
      <ul>
          <li className={'todoBox'}>
              <label>
                  <input type="checkbox" />
                  <span></span>
                  <i className={'material-icons red-text'}>delete</i>
              </label>
          </li>
      </ul>
  )
}