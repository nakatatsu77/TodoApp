import { useState } from 'react';
import { Todo } from '../types';

type AddTodoFormProps = {
  onAddTodo: (newTodoTitle: string) => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');// Todoの状態を管理

  const handleSubmit = () => {
    onAddTodo(newTodo);
    setNewTodo(''); // 入力フィールドをクリアする
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="p-2 border border-gray-300 mr-2"
      />
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white">
        追加
      </button>
    </div>
  );
};

export default AddTodoForm;
