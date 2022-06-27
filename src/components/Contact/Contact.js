import React, { useState } from 'react'
import PlayerImg from "../../images/profile-pic.png"
export default function Contact() {
    const [viewall, setViewAll] = useState(4)
    const [allViewLess, setAllViewLess] = useState(false)
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const handleChange = (view) => {
        view === "all" ? setAllViewLess(true) : setAllViewLess(false)
        view === "all" ? setViewAll(arr.length) : setViewAll(4)
    }
    return (
        <>
            <div className="sp-sm-3 my-10 sp-resp-full">
                <div className="sp-sec-bl sp-sec-bl-hg sp-sec-gy mr-sm p-0">
                    <div className="sp-sec-ch">
                        <div className="sp-head-top pb-10 pl-sm pr-sm ">
                            <h3>Contacts</h3>
                            {
                                allViewLess === true ?
                                    <span onClick={() => { handleChange("less") }}>View less</span>
                                    :
                                    <span onClick={() => { handleChange("all") }}>View all</span>
                            }
                        </div>
                        <div className="my-10 pl-sm pr-sm scroll-hg">
                            {
                                arr.slice(0, viewall).map((data, index) => {
                                    return (
                                        <div
                                            className="sp-contacts sp-flex sp-items-center sp-justify-between pb-10"
                                            key={index}
                                        >
                                            <div className="sp-flex sp-items-center">
                                                <img
                                                    className="sp-border-rounded"
                                                    src={PlayerImg}
                                                    alt="Player"
                                                />
                                                <div className="pl-sm">
                                                    <h4 className="m-none">Martins Black</h4>
                                                    <p className="m-none">Coach</p>
                                                </div>
                                            </div>
                                            <a className="dots-cs" href="#"
                                            ><i className="fas fa-ellipsis-h"></i
                                            ></a>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
