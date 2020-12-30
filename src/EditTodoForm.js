import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
      }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
    </form>
  );
}

export default EditTodoForm;