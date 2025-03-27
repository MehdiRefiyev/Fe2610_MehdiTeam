import React from 'react'
import './kenan.css'
// import img from './assets/images/png/logo192.png'

export default function Kenan() {

    function funcAlert(){
        alert("Rauf")
    }

    return (
        <>
            <div>Kenan</div>
            <button onClick={funcAlert}>
                Alert
            </button>
            <img src={require('./assets/images/png/logo192.png')} alt='react loader'/>
            <div>Ferid</div>
        </>
    )
}
