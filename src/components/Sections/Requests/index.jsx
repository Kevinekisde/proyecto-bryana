import React, { useState } from 'react'
import Table from '../../Template/Table'
import Tickets from '../../../data/tickets.json'
import { Breadcrumb } from 'antd'
import Actions from './Actions'
import Cotizar from './Cotizar'
import { normalizeText } from '../../../utils/paragraph'
import Search from './Search'
import { isNotEmpty } from '../../../utils/validations'

function Request() {

    const [search, setSearch] = useState({
        data: [],
        ticket: ''
    })

    const handleSearch = e => {
        const ticket = normalizeText(e.target.value)
        const result = Tickets.filter(t => normalizeText(t.ticket).includes(ticket))
        setSearch({
            data: result,
            ticket
        })
    }

    const columns = [
        { title: 'Nº Ticket', dataIndex: 'ticket', key: 'name', align: 'left', responsive: ['md'] },
        { title: 'Tipo de solicitud', dataIndex: 'type', key: 'type', align: 'left', responsive: ['md'] },
        { title: 'Estado', dataIndex: 'status', key: 'status', align: 'center' },
        { title: 'Fecha', dataIndex: 'fecha', key: 'date', align: 'center', responsive: ['md'] },
        { title: 'Nº Solped', dataIndex: 'solped', key: 'solped', align: 'center' },
        { title: 'Detalle', dataIndex: 'detalle', key: 'detail', align: 'center' },
        { title: 'Bien/Servicio', dataIndex: 'bien_servicio', key: 'bien_servicio', align: 'center' },
        {
            title: 'Acciones', dataIndex: 'actions', key: 'actions', align: 'center', render: (text, record) => <Actions Solicitud={record} />
        },
        {
            title: 'Cotizar', dataIndex: 'cotizar', key: 'cotizar', align: 'center', render: (text, record) => <Cotizar />
        }
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
                    Solicitudes de cotizacion
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">

                <Search onChange={handleSearch} />
            </div>

            <Table
                columns={columns}
                data={isNotEmpty(search.ticket) ? search.data : Tickets}
            />
        </div>
    )
}

export default Request