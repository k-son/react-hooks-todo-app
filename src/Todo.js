import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm 
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => toggleTodo(id)}
          />
          <ListItemText 
            style={{textDecoration: completed && "line-through"}}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              onClick={() => removeTodo(id)}
              aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit">
              <EditIcon onClick={toggle} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;