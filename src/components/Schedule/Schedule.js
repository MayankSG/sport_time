import React, { useEffect, useState } from 'react'
import CalendarPage from '../Calendar/CalendarPage'
import { useSelector } from "react-redux";

export default function Schedule() {
    const [arrSchedule, setArrSchedule] = useState([
        {
            title: "Team Meating",
            description: "Medical Check",
            start_time: "4:20 am",
            end_time: "6:30 am",
            date: new Date()
        },
        {
            title: "Team Meating",
            description: "Medical Check",
            start_time: "05:30 pm",
            end_time: "6:30 pm",
            date: new Date()
        },
        {
            title: "Team Meating",
            description: "Medical Check",
            start_time: "06:30 pm",
            end_time: "07:30 pm",
            date: new Date()
        }
    ])
    
    const [viewall, setViewAll] = useState(2)
    const [allViewLess, setAllViewLess] = useState(false)

    const handleChange = (view) => {
        view === "all" ? setAllViewLess(true) : setAllViewLess(false)
        view === "all" ? setViewAll(arrSchedule?.length) : setViewAll(2)
    }

    const shedularData = useSelector(state => state?.schedulardata.data)

    useEffect(() => {
        if (Object.values(shedularData).length !== 0) {
            setArrSchedule([...arrSchedule, shedularData])
        }

    }, [shedularData])

    return (
        <>
            <div className="sp-calender-main my-15">
                <div className="sp-calender">
                    <div>
                        <CalendarPage />
                    </div>
                    <div className="sp-head-top sp-head-main my-10 pt-10">
                        <h3>Schedule</h3>
                        {
                            allViewLess === true ?
                                <span onClick={() => { handleChange("less") }}>View less</span>
                                :
                                <span onClick={() => { handleChange("all") }}>View all</span>

                        }
                    </div>
                    <div className='scroll-hg2'>
                        {
                            arrSchedule && arrSchedule?.slice(0, viewall)?.map((data, index) => {
                                return (
                                    <div className="sp-sec-bl sp-sec-gy sp-border-rounded-md my-10" key={index}>
                                        <div className="sp-sec-ch">
                                            <div className="sp-contacts sp-flex sp-justify-between">
                                                <div className="">
                                                    <a href="#" className="team-meet">{data.title}</a>
                                                    <h4 className="my-10">{data.description}</h4>
                                                    <p>{`${data.start_time} - ${data.end_time}`}</p>
                                                </div>
                                                <a className="dots-cs" href="#"
                                                ><i className="fas fa-ellipsis-h"></i
                                                ></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
