import React from 'react'
import Table from '../../Template/Table'
import ProvidersData from '../../../data/Providers.json'
import { Breadcrumb } from 'antd'
import { BsEye } from 'react-icons/bs'
import { FaEye } from 'react-icons/fa'
import { Link } from 'gatsby'
import Create from './Create'
import Update from './Update'


function Providers() {
    const columns = [
        { title: 'Rut', dataIndex: 'rut', key: 'rut', align: 'left', responsive: ['md'] },
        { title: 'Razon social', dataIndex: 'company_name', key: 'company_name', align: 'left', responsive: ['md'] },
        { title: 'Nombre fantasia', dataIndex: 'fantasy_name', key: 'fantasy_name', align: 'center' },
        { title: 'Bien/Servicio', dataIndex: 'bien_servicio', key: 'bien_servicio', align: 'center' },
        { title: 'Commune', dataIndex: 'commune', key: 'commune', align: 'center', responsive: ['md'] },
        { title: 'Contacto', dataIndex: 'contact', key: 'contact', align: 'center' },
        {
            title: 'Editar', key: 'edit', align: 'left', responsive: ['md'], render: (text, record) => <Update id={record.id} />
        },
        {
            title: 'Detalle', key: 'detail', align: 'left', responsive: ['md'], render: (text, record) => <Link to={`/providers/${record.id}`} >
                <FaEye size={20} />
            </Link>
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
                        title: 'Lista de proveedores',
                    },
                ]}
                className='text-sm mb-4'
            />
            <div className='flex flex-col mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Proveedores
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">
                    <p className="text-sm text-[#556a89]">Listado de proveedores</p>
                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
            </div>
            <Table
                columns={columns}
                data={ProvidersData}
            />
        </div>
    )
}

export default Providers