"use client"
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState, FormEventHandler, ChangeEventHandler, MouseEvent } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";



const Addtask = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newTextValue, setNewTextValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    await addTodo({
      id:uuidv4(),
      text:newTextValue
    })
    setNewTextValue("");
    setModalIsOpen(false);
    router.refresh();
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTextValue(e.target.value);
  }

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setModalIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          onClick={handleButtonClick}
          className="btn btn-primary w-full">
          Click Me <AiOutlinePlus className="ml-2" size={18} />
        </button>
      </div>
      <Modal modalOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} >
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg"> ADD NEW TASK</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={newTextValue}
              onChange={handleChange}
            />
            <button type="submit" className="btn">Add Task</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Addtask;
