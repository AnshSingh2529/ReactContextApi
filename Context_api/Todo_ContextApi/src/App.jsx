import { useEffect,useState } from "react";
import { TodoContextProvider } from "./contexts"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo( (prev) => [{id: Math.random()*10+1, ...todo}       , ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo( (prev) => prev.map( (prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  const deleteTodo = (id) => {
    setTodo( (prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo( (prev) => prev.map( (prevtodo) => prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  useEffect( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodo(todos)
    }
  }, [])
  
  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div>
      <div className=" bg-[#172842] flex justify-center pt-20 text-6xl font-bold pb-10" >
      Context APi &  Todo App with React
      </div>

    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              < TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  < TodoItem todo={todo}/>
                </div>
              ))}
          </div>
      </div>
    </div>
</div>
</ TodoContextProvider>
    
  )
}

export default App
