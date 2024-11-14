import { Breadcrumb, Button } from 'antd'
import React, { useState } from 'react'
import Table from '../../Template/Table'
import Tickets from '../../../data/TicketsOc.json'
import { BiCheck, BiCheckDouble, BiX } from 'react-icons/bi'
import StatusText from '../../Template/StatusText'
import { navigate } from 'gatsby'
import Email from './Email'
import useAuthContext from '../../../hooks/useAuthContext'
import Actions from './Actions'
import { normalizeText } from '../../../utils/paragraph'
import Search from './Search'
import { isNotEmpty } from '../../../utils/validations'
import Excel from './Excel'
import { FaEye } from 'react-icons/fa'

function RequestOC() {

    const { user } = useAuthContext()


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [search, setSearch] = useState({
        data: [],
        ticket: ''
    })

    const handleSearch = e => {

        const ticket = normalizeText(e.target.value)
        const result = Tickets.filter(t => normalizeText(t.oc).includes(ticket) || normalizeText(t.type).includes(ticket) || normalizeText(t.status).includes(ticket) || normalizeText(t.oc).includes(ticket) || normalizeText(t.provider).includes(ticket))
        setSearch({
            data: result,
            ticket
        })
    }



    const columns = [
        { title: 'Nº Ticket', dataIndex: 'ticket', key: 'name', align: 'left', responsive: ['md'] },
        { title: 'Tipo de solicitud', dataIndex: 'type', key: 'type', align: 'left', responsive: ['md'] },
        { title: 'Estado', dataIndex: 'status', key: 'status', align: 'center', render: (text, record) => <StatusText status={record.status} /> },
        { title: 'Fecha', dataIndex: 'fecha', key: 'date', align: 'center', responsive: ['md'] },
        { title: 'Nº Solped', dataIndex: 'solped', key: 'solped', align: 'center' },
        { title: 'Nº OC', dataIndex: 'oc', key: 'oc', align: 'center' },
        { title: 'Proveedor', dataIndex: 'provider', key: 'provider', align: 'center' },
        { title: 'Detalle', dataIndex: 'detalle', key: 'detail', align: 'center' },
        {
            title: 'Recepcion', key: 'recepcion', align: 'center', render: (text, record) => {
                return (
                    <div className='flex justify-center gap-2'>
                        {
                            record.status == 'OC Enviada' ?
                                <div className='flex justify-center gap-2'>
                                    <Button className='px-2'>
                                        <BiCheckDouble />
                                    </Button>
                                    <Button onClick={() => navigate(`/requests-oc/reception/${record.ticket}`, {
                                        state: { ticket: record }
                                    })} className='px-2'>
                                        <BiCheck />
                                    </Button>
                                    <Button className='px-2'>
                                        <BiX />
                                    </Button>
                                </div>
                                : ''
                        }
                    </div>
                )
            }
        },
        {
            title: 'Ver', key: 'detail', align: 'center', responsive: ['md'], render: (text, record) =>
                <div className='flex justify-center gap-2'>
                    <Button onClick={() => navigate(`/requests-oc/reception/${record.id}`, {
                        state: { ticket: record }
                    })} className='px-2'>
                        <FaEye />
                    </Button>
                </div>
        },
        {
            title: 'Acciones', key: 'actions', align: 'center', render: (text, record) => <Actions Solicitud={record} />
        },
        {
            title: 'Seleccionar',
            key: 'selection',
            align: 'center',
            render: (text, record) => {
                return (
                    <div className='flex justify-center gap-2'>
                        {
                            record.status == 'Espera liberacion' &&
                            <Button
                                className='px-2'
                                onClick={() => {
                                    const selected = selectedRowKeys.includes(record.ticket)
                                    if (selected) {
                                        setSelectedRowKeys(selectedRowKeys.filter(key => key !== record.ticket))
                                    } else {
                                        setSelectedRowKeys([...selectedRowKeys, record.ticket])
                                    }
                                }}
                            >
                                {selectedRowKeys.includes(record.ticket) ? <BiCheck /> : <BiX />}
                            </Button>
                        }
                    </div>
                )
            }
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
                        title: 'Solicitudes OC',
                    },
                ]}

                className='text-sm mb-4'
            />

            <div className='flex justify-between flex-col lg:flex-row items-center mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Solicitudes OC
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">
                </div>
                {
                    user.isAdmin &&
                    <div className="flex gap-x-2 order-2">
                        <Email selectedRowKeys={selectedRowKeys} />
                        <Excel />
                    </div>
                }
                <Search onChange={handleSearch} />
            </div>

            <Table
                columns={columns}
                data={isNotEmpty(search.ticket) ? search.data : Tickets}
                ActiverowSelection
                selectedRowKeys={selectedRowKeys}
                setSelectedRowKeys={setSelectedRowKeys}
            />
        </div>
    )
}

export default RequestOC