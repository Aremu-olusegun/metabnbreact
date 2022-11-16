import React from 'react'
import Navbar from './Navbar'
import Mainpage from './Mainpage'

export const Homepage = (props) => {
    return (
        <div className='App'>
            <Navbar showModal={props.showModal} setShowModal={props.setShowModal}/>
            <Mainpage/>
        </div>
    )
}
