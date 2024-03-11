"use client"
import { ITask } from '@/types';
import React, { useState ,ChangeEventHandler,FormEventHandler} from 'react'
import { FiEdit } from "react-icons/fi";
import { TfiTrash } from "react-icons/tfi";
import Modal from './Modal';
import { useRouter } from "next/navigation";
import { editTodo ,deleteTodo } from '@/api';

interface TaskProps{
    task:ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit
        });
        setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
    }
    
    
    const handlleDeleteTask = async(id :string) => {
        await deleteTodo(id);
        setOpenModalEdit(false);
        router.refresh();
    }
    
    return (
        <>
        <tr key={task.id}>
            <td className='w-full'>{task.text}</td>
                <td className='flex gap-4'><FiEdit onClick={()=>{setOpenModalEdit(true)}} cursor="pointer" className='text-blue-500' size={25} />
                <Modal modalOpen={openModalEdit} setModalIsOpen={setOpenModalEdit} >
                    <form onSubmit={handleSubmitEditTodo}>
                     <h3 className="font-bold text-lg"> EDIT TASK</h3>
                     <div className="modal-action">
                       <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full"
                          value={taskToEdit}
                          onChange={(e)=>setTaskToEdit(e.target.value)}
                        />
                        <button type="submit" className="btn">Edit Task</button>
                     </div>
                    </form>
                </Modal>
                    <TfiTrash onClick={()=>setOpenModalDeleted(true)} cursor="pointer" className='text-red-500' size={25} /></td>
                    <Modal modalOpen={openModalDeleted} setModalIsOpen={setOpenModalDeleted} >
                    <form onSubmit={handleSubmitEditTodo}>
                     <h3 className="font-bold text-lg">Are you sure to delete this task ?</h3>
                     <div className="modal-action">
                      <button onClick={()=>handlleDeleteTask(task.id)} type="submit" className="btn">Delete Task</button>
                     </div>
                    </form>
                </Modal>
        </tr>
        </>
    )
}

export default Task;