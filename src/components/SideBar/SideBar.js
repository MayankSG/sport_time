import React from 'react'

export default function SideBar() {
    return (
        <>
            <div className="sp-xs-col left-sec float-left">
                <div className="my-15 pt-10">
                    <ul className="nav-tab">
                        <li className="nav-link active">
                            <div className="link-hov sp-border-rounded">
                                <i className="fas fa-home"></i>
                            </div>
                        </li>
                        <li className="nav-link">
                            <div className="link-hov sp-border-rounded">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                        </li>
                        <li className="nav-link">
                            <div className="link-hov sp-border-rounded">
                                <i className="fas fa-user-friends"></i>
                            </div>
                        </li>
                        <li className="nav-link">
                            <div className="link-hov sp-border-rounded">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </li>
                        <li className="nav-link">
                            <div className="link-hov sp-border-rounded">
                                <i className="fas fa-cog"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
