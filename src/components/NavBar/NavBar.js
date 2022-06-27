import React from 'react'
import ProfileImg from "../../images/profile-pic.png"
export default function NavBar() {
    return (
        <div>
            <div className="sp-header pr-sm">
                <div className="sp-text-right pl-sm logo-prt pb-10">
                    <h2 className="sp-fw-bold">Sport Time</h2>
                </div>
                <div className='sp-head2'>
                    <h4 className="pr-md my-10">April 18, 2021</h4>
                    <div className="pr-md search-area my-10">
                        <i className="fas fa-search"></i>
                        <input className="pl-md" type="search" placeholder="Search" />
                    </div>
                    <div
                        className="sp-flex sp-items-center sp-justify-end cursor-pointer my-10 user-profile"
                    >
                        <div className="sp-text-right mx-15">
                            <h3 className="m-none">Eleanor Pena</h3>
                            <p className="m-none">Admin</p>
                        </div>
                        <img
                            className="sp-border-rounded cursor-pointer"
                            height="60px"
                            width="60px"
                            src={ProfileImg}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
