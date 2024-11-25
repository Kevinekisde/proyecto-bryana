import React from 'react'
import Cancel from './Cancel'
import Update from './Update'

function Actions({ Solicitud }) {
    return (
        <div className='flex items-center justify-center gap-2'>
            <Cancel solicitud={Solicitud} />
            <Update solicitud={Solicitud} />
        </div>
    )
}

export default Actions