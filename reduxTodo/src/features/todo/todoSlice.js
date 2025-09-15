import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id:1,
            text: "Hello World"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions // exporting individual functions for using them in components

export default todoSlice.reducer

{/* 
    Redux toolkit ki notes

1. Create Store - single source of truth

it has configureStore

introduce reducer



2. Create Slice(functions) method(createSlice)

Slice has name, initialState, reducers :{key: function}

Access of two things (State, action)

state = state value in the store

action = action.payload 

export individual functionality 

export main source export



3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()

 dispatch(addTodo())



4. Take Values - useSelector((state) =>state.todos) state ka access chaiye

variable me values lelo ek baar aagaie uske baad pure JS concept hai 

Note: Todo's Project basic nai hote xD  :)
    
    
*/}

