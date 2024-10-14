"use client";



import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Accordian from "./Accordian";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                onClick={() => {
                    const modal = document.getElementById('my_modal_1')as HTMLDialogElement;
                    if (modal) {
                        modal.showModal();
                    }
                }}
            >
                <div
                    onClick={toggleModal}
                    className="flex gap-2 bg-[#10846F] px-4 md:mt-0 mt-10 rounded-full py-1 items-center text-white"
                    style={{ boxShadow: '1px 1px 20px #000' }}
                >
                    <FaLocationDot /> All of Bangladesh
                </div>
            </button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-between items-center">

                        <h3 className="font-bold text-lg">Hello!</h3>

                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="">
                                <RxCross2 className='text-2xl text-black border border-black rounded-md'></RxCross2 >
                            </button>
                        </form>

                    </div>
                    <Accordian></Accordian>

                </div>
            </dialog>
        </>
    );
};

export default Modal;
