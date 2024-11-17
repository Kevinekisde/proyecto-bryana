import { Breadcrumb, Table } from 'antd'
import React, { useState } from 'react'
import OrdenEstadisticaData from '../../../data/OrdenEstadistica.json'
import Actions from './Actions'
import Create from './Create'
import Search from './Search'
import { normalizeText } from '../../../utils/paragraph'
import { isNotEmpty } from '../../../utils/validations'

function OrderStatistics() {

    const [search, setSearch] = useState({
        data: [],
        order: ''
    })

    const handleSearch = e => {
        const order = normalizeText(e.target.value)
        const result = OrdenEstadisticaData.filter(u => normalizeText(u.Nombre).includes(order) || normalizeText(u.Codigo_Nave).includes(order) || normalizeText(u.Centro_de_Costo).includes(order))

        setSearch({
            data: result,
            order
        })
    }

    const columns = [
        { title: 'Id', dataIndex: 'id_Orden_Estadistica', key: 'id_Orden_Estadistica', align: 'left', responsive: ['md'] },
        { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre', align: 'left', responsive: ['md'] },
        { title: 'Codigo', dataIndex: 'Codigo_Nave', key: 'Codigo_Nave', align: 'center' },
        { title: 'Centro de costo', dataIndex: 'Centro_de_Costo', key: 'Centro_de_Costo', align: 'center' },
        { title: 'Orden Compra', dataIndex: 'id_Orden_Compra', key: 'id_Orden_Compra', align: 'center' },
        {
            title: 'Acciones', key: 'edit', align: 'center', responsive: ['md'], render: (text, record) => <Actions order={record} />
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
                        title: 'Ordenes Estadisticas',
                    },
                ]}
                className='text-sm mb-4'
            />

            <div className='flex flex-col mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Ordenes Estadisticas
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">
                    <p className="text-sm text-[#556a89]">Listado de Ordenes Estadisticas</p>
                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
                <Search onChange={handleSearch} />
            </div>
            <Table
                columns={columns}
                dataSource={isNotEmpty(search.order) ? search.data : OrdenEstadisticaData}
                rowKey='id_Orden_Estadistica'
            />

        </div>
    )
}

export default OrderStatistics