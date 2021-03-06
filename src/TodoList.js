import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, idx) => (
          <>
            <Todo
              {...todo} // here we pass id, task, completed
              key={todo.id} 
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {idx < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;