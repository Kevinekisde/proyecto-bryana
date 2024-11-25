import { Button } from 'antd'
import React, { useState } from 'react'
import { AiFillFileExcel } from 'react-icons/ai'
import { LoadingOutlined } from '@ant-design/icons'

function Excel() {

    const [loading, setLoading] = useState(false)

    const downloadExcel = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <Button
            className="px-5"
            onClick={() => downloadExcel(true)}
        >
            {loading ? <LoadingOutlined /> :
                <AiFillFileExcel size={20} color='green' />
            }
        </Button>
    )
}

export default Excel