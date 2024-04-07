import React from "react"
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
    }
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Welcome Home</h2>
                    <p>Click the button to logout.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}