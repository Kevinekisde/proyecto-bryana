import React from 'react'
import Table from '../../Template/Table'
import Tickets from '../../../data/tickets.json'
import { Breadcrumb } from 'antd'

function Request() {

    const columns = [
        { title: 'Nº Ticket', dataIndex: 'ticket', key: 'name', align: 'left', responsive: ['md'] },
        { title: 'Tipo de solicitud', dataIndex: 'type', key: 'type', align: 'left', responsive: ['md'] },
        { title: 'Estado', dataIndex: 'status', key: 'status', align: 'center' },
        { title: 'Fecha', dataIndex: 'fecha', key: 'date', align: 'center', responsive: ['md'] },
        { title: 'Nº Solped', dataIndex: 'solped', key: 'solped', align: 'center' },
        { title: 'Detalle', dataIndex: 'detalle', key: 'detail', align: 'center' },
        { title: 'Bien/Servicio', dataIndex: 'bien_servicio', key: 'bien_servicio', align: 'center' },
    ]

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/dashboard">Inicio</a>,
                    },
                    {
                        title: 'Solicitudes de cotizacion',
                    },
                ]}

                className='text-sm mb-4'
            />

            <div className='flex justify-between flex-col lg:flex-row items-center mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Solicitudes
                </p>
            </div>

            <Table
                columns={columns}
                data={Tickets}
            />
        </div>
    )
}

export default Request