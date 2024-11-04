import { Breadcrumb, Table } from 'antd'
import React from 'react'
import DepartamentosData from '../../../data/Departamentos.json'
import Create from './Create'
import Update from './Update'
import Actions from './Actions'

function Departaments() {

    const columns = [
        { title: 'Id', dataIndex: 'id_Departamento', key: 'id_Departamento', align: 'left', responsive: ['md'] },
        { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre', align: 'left', responsive: ['md'] },
        { title: 'Descripcion', dataIndex: 'Descripcion', key: 'Descripcion', align: 'center' },
        { title: 'Encargado', dataIndex: 'Encargado', key: 'Encargado', align: 'center' },
        {
            title: 'Acciones', key: 'edit', align: 'center', responsive: ['md'], render: (text, record) => <Actions departamento={record} />
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
                        title: 'Lista de departamentos',
                    },
                ]}
                className='text-sm mb-4'
            />
            <div className='flex flex-col mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Departamentos
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">
                    <p className="text-sm text-[#556a89]">Listado de Departamentos</p>
                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={DepartamentosData}
                rowKey='id_Departamento'
            />
        </div>
    )
}

export default Departaments