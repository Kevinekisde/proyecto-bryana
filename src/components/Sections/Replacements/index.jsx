import { Breadcrumb } from 'antd'
import React, { useState } from 'react'
import ReemplazosData from '../../../data/Reemplazos.json'
import { normalizeText } from '../../../utils/paragraph'
import { isNotEmpty } from '../../../utils/validations'
import Search from './Search'
import Table from '../../Template/Table'
import Create from './Create'
import Actions from './Actions'

function Remplazos() {

    const [search, setSearch] = useState({
        data: [],
        user: ''
    })


    const handleSearch = e => {
        const user = normalizeText(e.target.value)
        const result = ReemplazosData.filter(u => normalizeText(u.vacations).includes(user) || normalizeText(u.replacer).includes(user) || normalizeText(u.comment).includes(user) || normalizeText(u.end_date).includes(user))
        setSearch({
            data: result,
            user
        })
    }

    const columns = [
        {
            title: 'En Vacaciones', dataIndex: 'vacations', key: 'vacations', align: 'left',
        },
        {
            title: 'Reemplazante', dataIndex: 'replacer', key: 'replacer', align: 'left',
        },
        {
            title: 'Comentario', dataIndex: 'comment', key: 'comment', align: 'center',
        },
        {
            title: 'Fecha Retorno', dataIndex: 'end_date', key: 'end_date', align: 'center',
        },
        {
            title: 'Acciones', dataIndex: 'actions', key: 'actions', align: 'center', render: (text, record) => (
                <Actions reemplazo={record} />
            )
        }
    ]

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/requests">Inicio</a>,
                    },
                    {
                        title: 'Administracion',
                    },
                    {
                        title: 'Remplazos',
                    }
                ]}
                className='text-sm mb-4'
            />

            <div className='flex justify-between flex-col lg:flex-row items-center mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Reemplazos
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">
                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
                <Search onChange={handleSearch} />
            </div>

            <Table
                columns={columns}
                data={isNotEmpty(search.user) ? search.data : ReemplazosData}
            />

        </div>
    )
}

export default Remplazos