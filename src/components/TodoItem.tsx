import { Todo } from '../types';

type TodoItemProps = {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveTodo }) => (
  <div className="p-4 shadow-md mb-2 flex justify-between">
    {todo.title}
    <button
      onClick={() => onRemoveTodo(todo.id)}
      className="p-2 bg-teal-500 text-white"
    >
      削除
    </button>
  </div>
);

export default TodoItem;
