import { createContext, useContext } from "react";

export const  TodoContext = createContext({
    Todos:[{
        id: 1,
        todo: "Todo msg",
        completed:false
        }
],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}



});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}