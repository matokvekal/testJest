
import Todo from "./components/Todo";

function App() {
  const todos = [
  {id:1,title: "Finish the course" , completed: false},
  {id:2,title: "Take the dog out", completed: false},
  {id:3,title: "Take the trash out", completed: false},
  {id:4,title: "Clean the room", completed: false},
  {id:5,title: "Go to the gym", completed: false},
  {id:6,title: "Buy groceries", completed: true},
  {id:7,title: "Finish the course", completed: true}]
  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/> 
      ))}

    </div>
  );
}

export default App;
