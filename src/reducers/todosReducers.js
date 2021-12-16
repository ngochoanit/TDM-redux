import { ADD_TODO, CLEAR_MARKED, DELETE_TODO, EDIT_TODO, MARK_ALL, MARK_TODO } from "../constants/ActionTypes";

const initialState = [{
    text: "",
    marked: false,
    id: 0
}]

const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.payload.text
            }, ...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        case EDIT_TODO:
            return state.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo);
        case MARK_TODO:
            return state.map((todo) => todo.id === action.payload.id ? { ...todo, marked: !todo.marked } : todo);
        case MARK_ALL:
            return state.map((todo) => todo.marked ? todo : { ...todo, marked: !todo.marked });
        case CLEAR_MARKED:
            return state.map((todo) => todo.marked ? { ...todo, marked: !todo.marked } : todo);
        default: return state;

    }
}
export default todosReducers;