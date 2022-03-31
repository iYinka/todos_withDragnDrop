import React from 'react'
import { Todo } from '../model'
import SingleTodo from './card';
import "./styles.css"
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
      <div className="container">
          <Droppable droppableId="TodosList">
              {(provided, snapshot) => (
                  <div
                      className={`todos ${snapshot.isDraggingOver ? 'dragactive': ''}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                  >
                      <span className="todos__heading">Active</span>
                      {todos.map((todo, index) => (
                          <SingleTodo
                              index={index}
                              todo={todo}
                              key={todo.id}
                              todos={todos}
                              setTodos={setTodos}
                          />
                      ))}
                  </div>
              )}
          </Droppable>
          <Droppable droppableId="TodosRemove">
              {(provided,snapshot) => (
                  <div
            className={`todos remove${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                  >
                      <span className="todos__heading">Completed</span>
                      {completedTodos.map((todo, index) => (
                          <SingleTodo
                              index={index}
                              todo={todo}
                              key={todo.id}
                              todos={completedTodos}
                              setTodos={setCompletedTodos}
                          />
                      ))}
                  </div>
              )}
          </Droppable>
      </div>
  );
}

export default TodoList