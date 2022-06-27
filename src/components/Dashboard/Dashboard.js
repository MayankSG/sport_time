import React from 'react'
import Contact from '../Contact/Contact'
import CreateEvent from '../CreateEvent/CreateEvent'
import LineChart from '../charts/LineChart'
import Remindar from '../Remindar/Remindar'
import Schedule from '../Schedule/Schedule'

export default function Dashboard() {
    return (
        <div className='sp-lg-col pr-sm right-sec float-right'>
            <div className="sp-flex sp-flex-wrap sp-content">
                <div className="sp-sm-12 pb-10 sp-text-left">
                    <h1>Dashboard</h1>
                </div>
                <div className="sp-sm-9 mob-full">
                    <div className="sp-flex sp-flex-wrap sp-items-center">
                        <CreateEvent />
                        <Remindar />
                        <Contact />
                        <LineChart />
                    </div>
                </div>
                <div className="sp-sm-3 mob-full">
                    <Schedule />
                </div>
            </div>
        </div>
    )
}
