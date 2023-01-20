import { createSlice } from '@reduxjs/toolkit'
import { initialStateType } from '../type';
// defining initial state
const initialState: initialStateType = {
    data: [],
}
// creating slice here
const reducerSlice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        // add post method
        addArticle: (state, action) => {
            state.data = [...state.data, action.payload]
            console.log(action.payload);
        },
        // delete action..
        deleteArticle: (state, action) => {
            const { id } = action.payload
            console.log(id);
            state.data = state.data.filter((item: any) => item.id !== id)
            console.log("data", state.data);
        }
    }
});
export const { addArticle, deleteArticle } = reducerSlice.actions;
export default reducerSlice.reducer
