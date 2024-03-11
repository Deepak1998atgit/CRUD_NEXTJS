import { ITask } from "@/types";
import Tasks from "./Tasks";

interface InterFaceProps{
    tasks:ITask[]
}

const TodoList : React.FC<InterFaceProps>= ({tasks}) => {
    return (
    <>
    <div className="overflow-x-auto">
    <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {/* row 1 */}
    {tasks.map(
        task => (
        <Tasks key={task.id} task={ task} />
        )
    )}
    </tbody>
  </table>
</div>
</>
);}

export default TodoList;