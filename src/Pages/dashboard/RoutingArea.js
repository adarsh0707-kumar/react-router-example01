import React from 'react'
import { Outlet } from 'react-router-dom'

const RoutingArea = () => {
    return (
        <div className='dashboard-routingArea'>
            <h1>Adarsh's routing Project Examples</h1>
            <div className='dashboard-routingArea-mainArea'>
                <Outlet />
            </div>
        </div>
    )
}

export default RoutingArea