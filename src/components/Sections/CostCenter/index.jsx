import { Breadcrumb, Table } from 'antd'
import React, { useState } from 'react'
import CentroCostosData from '../../../data/CentroCostos.json'
import Create from './Create'
import Actions from './Actions'
import Search from './Search'
import { normalizeText } from '../../../utils/paragraph'
import { isNotEmpty } from '../../../utils/validations'

function CentroDeCosto() {

    const [search, setSearch] = useState({
        data: [],
        ceco: ''
    })

    const handleSearch = e => {
        console.log(e.target.value)
        const ceco = normalizeText(e.target.value)
        const result = CentroCostosData.filter(u => normalizeText(u.Nombre).includes(ceco) || normalizeText(u.Codigo_Ceco).includes(ceco))

        setSearch({
            data: result,
            ceco
        })
    }

    const columns = [
        { title: 'Id', dataIndex: 'id_Ceco', key: 'id_Ceco', align: 'left', responsive: ['md'] },
        { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre', align: 'left', responsive: ['md'] },
        { title: 'Codigo', dataIndex: 'Codigo_Ceco', key: 'Codigo_Ceco', align: 'center' },
        {
            title: 'Acciones', key: 'edit', align: 'center', responsive: ['md'], render: (text, record) => <Actions Ceco={record} />
        },
    ]
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/requests">Inicio</a>,
                    },
                    {
                        title: 'Centros de Costo',
                    },
                ]}
                className='text-sm mb-4'
            />

            <div className='flex flex-col mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Centro de Costos
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
                dataSource={isNotEmpty(search.ceco) ? search.data : CentroCostosData}
                rowKey='id_Ceco'
            />

        </div>
    )
}

export default CentroDeCosto