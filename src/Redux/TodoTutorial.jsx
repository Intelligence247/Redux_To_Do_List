import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList: []
}

const TodoTutorial = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
        state.todoList.push(action.payload)
    }
  }
});

export const { saveTodo } = TodoTutorial.actions

export default TodoTutorial.reducer