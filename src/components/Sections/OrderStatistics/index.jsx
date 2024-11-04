import { Breadcrumb, Table } from 'antd'
import React from 'react'
import OrdenEstadisticaData from '../../../data/OrdenEstadistica.json'
import Actions from './Actions'
import Create from './Create'

function OrderStatistics() {
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
                        title: <a href="/dashboard">Inicio</a>,
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
            </div>
            <Table
                columns={columns}
                dataSource={OrdenEstadisticaData}
                rowKey='id_Orden_Estadistica'
            />

        </div>
    )
}

export default OrderStatistics