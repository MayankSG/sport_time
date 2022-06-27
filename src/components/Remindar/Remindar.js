import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { toast } from 'react-toastify';
import { ReminderPost } from "../../Redux/Actions/ReminderAction"
import { useSelector, useDispatch } from 'react-redux';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: "60%",
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Remindar() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [remdata, setRemData] = useState([
        {
            rem_time: "04:30 pm",
            title: "Training Session"
        },
        {
            rem_time: "04:30 pm",
            title: "Team Meating"
        }
    ])
    const [time, setTime] = useState(new Date());
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const remiderdata = useSelector(state => state?.reminderdata?.data)

    useEffect(() => {
        if (Object.values(remiderdata).length !== 0) {

            setRemData([...remdata, remiderdata])
        }
    }, [remiderdata]);

    const timehandle = (time) => {
        let ampm = time.slice(0, time.indexOf(":")) > 12 ? `${time.slice(0, time.indexOf(":")) - 12}${time.slice(time.indexOf(":"), time.length)} pm` : `${time} am`
        setTime(ampm)
    }

    const handleSubmit = () => {
        let data = {
            rem_time: time,
            title: title
        }
        dispatch(ReminderPost(data))
        setIsOpen(false);
        setTitle("")
        setTime(new Date())

        toast.success("Your reminder saved successfully!")
    }

    function openModal(time) {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <>
            <div className="sp-sm-3 my-10 sp-resp-full">
                <div className="sp-sec-bl sp-sec-bl-hg sp-sec-gy">
                    <div className="sp-sec-ch">
                        <div>
                            <h3>Reminder</h3>
                        </div>
                        <div className='scroll-hg' style={{ height: 100 }}>
                            {
                                remdata && remdata?.reverse().map((data, index) => {
                                    return (
                                        <div className="sp-flex my-10" key={index}>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="slider round"></span>
                                            </label>
                                            {data.title} {data.rem_time}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div onClick={() => openModal()} className="add-new"> + Add new</div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <div className='modal-body'>
                        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Heldivlo</h2> */}

                        <div onClick={closeModal} className="close-icon"><span>×</span></div>

                        <div>
                            <h4 >Start time</h4>
                            <TimePicker style={{ marginBottom: "10px" }} onChange={(time) => timehandle(time)} value={time} disableClock={true} amPmAriaLabel={"Select AM/PM"} format={"h:m a"} className="react-time-picker" />
                        </div>
                        <div>
                            <h4 className='titlebox' >Title</h4>
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
