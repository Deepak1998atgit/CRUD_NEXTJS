import { ITask } from "./types"

const baseUrl = "http://localhost:3001"

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`,{cache:"no-store"});
    const todos = await res.json();
    return todos;
}


export const addTodo = async (todo: ITask): Promise<ITask[]> => {
    try {
      const res = await fetch(`${baseUrl}/tasks`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      });
  
      if (!res.ok) {
        throw new Error('Failed to add todo');
      }
  
      const newTodo = await res.json();
      return newTodo;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
};


export const editTodo = async (todo: ITask): Promise<ITask[]> => {
    try {
      const res = await fetch(`${baseUrl}/tasks/${todo?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      });
  
      if (!res.ok) {
        throw new Error('Failed to add todo');
      }
  
      const editedTodo = await res.json();
      return editedTodo;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
};
  


export const deleteTodo = async (id:string):Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`,
        {
            method: "DELETE"
        }
    );
}