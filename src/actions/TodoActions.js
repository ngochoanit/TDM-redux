import * as types from "../constants/ActionTypes"
export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        payload: {
            text
        }

    }
}
export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        payload: {
            id
        }
    }
}
export function edit(id, text) {
    return {
        type: types.EDIT,
        payload: {
            id,
            text
        }
    }
}
export function markTodo(id) {
    return {
        type: types.MARK_TODO,
        payload: {
            id
        }
    };
}

export function markAll() {
    return {
        type: types.MARK_ALL
    };
}

export function clearMarked() {
    return {
        type: types.CLEAR_MARKED
    };
}
