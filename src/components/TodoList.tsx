import TodoItem from './TodoItem';
import { Todo } from '../types';

type TodoListProps = {
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
  </div>
);

export default TodoList;
