import Container from '@mui/material/Container';
import TodoApp from "./containers/TodoApp";

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const MARK_ITEM = 'MARK_ITEM';

function App() {
  return (
    <div className="App">
      <Container>
        <TodoApp/>
      </Container>
    </div>
  );
}

export default App;
