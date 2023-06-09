import { Todo } from '../components/models';

//保存数据到浏览器缓存
export function saveTodos(todos: Todo[]) {
  localStorage.setItem('todos_key', JSON.stringify(todos));
}

//从浏览器缓存中读取
export function readTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]');
}
