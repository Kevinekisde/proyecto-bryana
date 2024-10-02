import React from 'react'
import Table from '../../Template/Table'
import ProvidersData from '../../../data/Providers.json'
import { Breadcrumb } from 'antd'
import { BsEye } from 'react-icons/bs'
import { FaEye } from 'react-icons/fa'


function Providers() {
    const columns = [
        { title: 'Rut', dataIndex: 'rut', key: 'rut', align: 'left', responsive: ['md'] },
        { title: 'Razon social', dataIndex: 'company_name', key: 'company_name', align: 'left', responsive: ['md'] },
        { title: 'Nombre fantasia', dataIndex: 'fantasy_name', key: 'fantasy_name', align: 'center' },
        { title: 'Bien/Servicio', dataIndex: 'bien_servicio', key: 'bien_servicio', align: 'center' },
        { title: 'Commune', dataIndex: 'commune', key: 'commune', align: 'center', responsive: ['md'] },
        { title: 'Contacto', dataIndex: 'contact', key: 'contact', align: 'center' },
        {
            title: 'Detalle', key: 'detail', align: 'left', responsive: ['md'], render: () => <a href="/proveedores/detalle">
                <FaEye size={20} />
            </a>
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
            <Table
                columns={columns}
                data={ProvidersData}
            />
        </div>
    )
}

export default Providers