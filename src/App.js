import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList'
function App() {
  const todoList = ["1", "2", "3", "4"]
  return (
      <TodoList todoList={todoList}/>
  )
}

export default App;
