import React from "react";

interface ModalOpenProps {
  modalOpen: boolean;
  setModalIsOpen: (open: boolean) => void; // Change the return type to void
  children: React.ReactNode;
}

const Modal: React.FC<ModalOpenProps> = ({ modalOpen, setModalIsOpen, children }) => {
  return (
    <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={() => { setModalIsOpen(false) }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {children} {/* Render children inside the modal box */}
      </div>
    </dialog>
  );
}

export default Modal;
