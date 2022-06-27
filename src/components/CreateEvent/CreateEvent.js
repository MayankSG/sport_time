import React, { useState } from 'react'
import PlayerImage from "../../images/player-bg.png"
import Modal from 'react-modal';
import { toast } from 'react-toastify';
export default function CreateEvent() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("")

    const handleSubmit = () => {
        if (title !== "") {
            setIsOpen(false);
            setTitle("")
            toast.success("Your event saved successfully!")
        }else{
            toast.error("Please enter title")
        }

    }

    function openModal(time) {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            width: "60%",
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black'
        },
    };
    return (
        <>
            <div className="sp-sm-9 my-10 sp-resp-full">
                <div
                    className="sp-sec-bl sp-sec-bl-hg sp-fx-comm sp-fx-player-img mr-sm"
                >
                    <div className="w-66 sp-sec-ch">
                        <div className='sp-text-left'>
                            <h3>Good Morning, Eleanor</h3>
                            <p className="pt-10">
                                Welcome to your daily event calender, Here you can see
                                all the upcoming events, meetings and create new events.
                            </p>
                        </div>
                        <div onClick={() => { openModal() }} className="create-event"> + Create event</div>
                    </div>
                    <div className="img-player">
                        <img
                            width=""
                            height=""
                            src={PlayerImage}
                            alt="Player"
                        />
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='modal-body'>
                        <div onClick={closeModal} className="close-icon"><span>×</span></div>
                        <div>
                            <h4>Title</h4>
                            <input
                                type="text"
                                className='form-control'
                                placeholder="Write title here"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div style={{ marginTop: 25, textAlign: 'center', }}>
                            <button className="savebuttton" onClick={handleSubmit}>
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
