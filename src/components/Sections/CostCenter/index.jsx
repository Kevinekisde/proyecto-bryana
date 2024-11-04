import { Breadcrumb, Table } from 'antd'
import React from 'react'
import CentroCostosData from '../../../data/CentroCostos.json'
import Create from './Create'
import Actions from './Actions'

function CentroDeCosto() {

    const columns = [
        { title: 'Id', dataIndex: 'id_Ceco', key: 'id_Ceco', align: 'left', responsive: ['md'] },
        { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre', align: 'left', responsive: ['md'] },
        { title: 'Codigo', dataIndex: 'Codigo_Nave', key: 'Codigo_Ceco', align: 'center' },
        {
            title: 'Acciones', key: 'edit', align: 'center', responsive: ['md'], render: (text, record) => <Actions Ceco={record} />
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
                    <p className="text-sm text-[#556a89]">Listado de Centro de Costos</p>
                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={CentroCostosData}
                rowKey='id_Ceco'
            />

        </div>
    )
}

export default CentroDeCosto