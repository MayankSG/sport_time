import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import "./calendar.css";
import { SchedularPost } from "../../Redux/Actions/SchedulaAction"
import { useDispatch } from 'react-redux';
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

const color = {
  color: 'white'
}



export default function CalendarPage() {
  let dates = `${new Date().getHours()}:${new Date().getMinutes()}`

  const [datess, setDate] = useState(new Date());
  const [time, setTime] = useState(dates);
  const [endtime, setEndTime] = useState(dates);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch()
  const handleChangle = (date) => {
    setDate(date)
    setIsOpen(true);
  }

  const startTime = (time) => {
    let ampm = time.slice(0, time.indexOf(":")) > 12 ? `${time.slice(0, time.indexOf(":")) - 12}${time.slice(time.indexOf(":"), time.length)} pm` : `${time} am`
    setTime(ampm)
  }

  const endTime = (time) => {
    let ampm = time.slice(0, time.indexOf(":")) > 12 ? `${time.slice(0, time.indexOf(":")) - 12}${time.slice(time.indexOf(":"), time.length)} pm` : `${time} am`

    setEndTime(ampm)
  }

  const Submit = () => {
    let data = {
      title: title,
      description: description,
      start_time: time,
      end_time: endtime,
      date: datess


    }
    dispatch(SchedularPost(data))
    setIsOpen(false);
    setTitle("")
    setDescription("")
    setTime(dates)
    setEndTime(dates)
    setDate(new Date())
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <Calendar onChange={(date) => handleChangle(date)} value={datess} prev2Label={null} next2Label={null} style={{ backgroundColor: 'black' }} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className='modal-body'>
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div onClick={closeModal} className="close-icon"><span>×</span></div>

          <div>
            <h4 style={color}>Start time</h4>
            <TimePicker onChange={(time) => startTime(time)} value={time} disableClock={true} amPmAriaLabel={"Select AM/PM"} format={"h:m a"} className="react-time-picker" />
          </div>

          <div>
            <h4 style={color}>End time</h4>
            <TimePicker onChange={(time) => endTime(time)} value={endtime} disableClock={true} amPmAriaLabel={"Select AM/PM"} format={"h:m a"} style={{ color: 'white' }} />
          </div>

          <div>
            <h4 style={color}>Title</h4>
            <input
              className='form-control'
              type="text"
              placeholder="Write title here"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </div>

          <div>
            <h4 style={color}>Description</h4>
            <input
              className='form-control'
              type="text"
              placeholder="Write description here"
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
            />
          </div>
          <div style={{ marginTop: 25, textAlign: 'center', }}>
            <button className="savebuttton" onClick={() => { Submit() }}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}