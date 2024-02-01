import { useState } from "react";
import type { NextPage } from "next";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../types";

export default function Home() {
  // ToDoリストの状態を管理する
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新しいToDoを追加する関数
  const addTodo = (newTodoTitle: string) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodoTitle }]);
  };

  // ToDoを削除する関数
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}
