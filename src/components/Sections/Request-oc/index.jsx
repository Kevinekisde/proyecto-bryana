import { Breadcrumb, Button } from 'antd'
import React, { useState } from 'react'
import Table from '../../Template/Table'
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
import useRequestOC from '../../../hooks/useRequestOC'

function RequestOC() {

    const { user } = useAuthContext()

    const { data, isLoading, isSuccess, isError } = useRequestOC()

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [search, setSearch] = useState({
        data: [],
        ticket: ''
    })


    const handleSearch = e => {

        const ticket = normalizeText(e.target.value)
        const result = data.filter(t => normalizeText(t.oc).includes(ticket) || normalizeText(t.type).includes(ticket) || normalizeText(t.status).includes(ticket) || normalizeText(t.oc).includes(ticket) || normalizeText(t.provider).includes(ticket))
        setSearch({
            data: result,
            ticket
        })
    }



    const columns = [
        { title: 'Nº Ticket', dataIndex: 'iD_Ticket', key: 'iD_Ticket', align: 'left', responsive: ['md'] },
        // { title: 'Tipo de solicitud', dataIndex: 'type', key: 'type', align: 'left', responsive: ['md'] },
        { title: 'Estado', dataIndex: 'estado', key: 'estado', align: 'center', render: (text, record) => <StatusText status={record.estado} /> },
        { title: 'Fecha', dataIndex: 'fecha_Creacion_OC', key: 'fecha_Creacion_OC', align: 'center', responsive: ['md'], render: (text, record) => new Date(record.fecha_Creacion_OC).toLocaleDateString() },
        {
            title: 'Nº Solped', dataIndex: 'solped', key: 'solped', align: 'center', render: (text, record) => {
                return record.solped == 0 ? 'Sin Solped' : record.solped
            }
        },
        { title: 'Ordenes estadisticas', dataIndex: 'id_OE', key: 'id_OE', align: 'center' }, // Falta Numero de id
        { title: 'Nº OC', dataIndex: 'numero_OC', key: 'oc', align: 'center' },
        { title: 'Proveedor', dataIndex: 'iD_Proveedor', key: 'iD_Proveedor', align: 'center' }, // Falta Numero de id
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
    ]

    if (user.isAdmin) {
        columns.push(
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
        )
    }


    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/requests">Inicio</a>,
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
                data={isLoading && isNotEmpty(search.ticket) ? search.data : data}
                ActiverowSelection
                selectedRowKeys={selectedRowKeys}
                setSelectedRowKeys={setSelectedRowKeys}
            />
        </div>
    )
}

export default RequestOC