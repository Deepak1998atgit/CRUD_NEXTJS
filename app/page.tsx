import { getAllTodos } from "@/api";
import Addtask from "./components/AddTask";
import TodoList from "./components/TodoList";


export default async  function Home() {
  const tasks=await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="text-center flex flex-col gap-4 my-5">
        <h1 className="text-2xl font-bold">To Do List App</h1>
        <Addtask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
