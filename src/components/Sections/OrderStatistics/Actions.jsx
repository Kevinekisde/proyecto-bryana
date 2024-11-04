import React from 'react'
import Update from './Update'
import Delete from './Delete'

function Actions({ order }) {
    return (
        <div className='flex items-center justify-center gap-2'>
            <Update order={order} />
            <Delete order={order} />
        </div>
    )
}

export default Actions