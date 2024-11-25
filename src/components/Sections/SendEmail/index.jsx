import { Breadcrumb, Button } from 'antd'
import React, { useState } from 'react'
import Table from '../../Template/Table'
import EnviarCorreoData from '../../../data/EnvioCorreo.json'
import { BiCheck, BiX } from 'react-icons/bi';
import Email from './email';
import Search from './Search';
import { normalizeText } from '../../../utils/paragraph';
import { isNotEmpty } from '../../../utils/validations';

function EnviarCorreo() {
    // N° Ticket / N° OC / Solicitante / Proveedor / CeCo / Fecha Creacion / Correos Enviados / Primer Correo / Ultimo Correo / Recepcion


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [search, setSearch] = useState({
        data: [],
        email: ''
    })

    const handleSearch = e => {
        const email = normalizeText(e.target.value)
        const result = EnviarCorreoData.filter(u => normalizeText(u.ticket).includes(email) || normalizeText(u.proveedor).includes(email) || normalizeText(u.ceco).includes(email) || normalizeText(u.solicitante).includes(email))
        setSearch({
            data: result,
            email
        })
    }

    const columns = [
        { title: 'N° Ticket', dataIndex: 'ticket', key: 'ticket', align: 'center' },
        { title: 'N° OC', dataIndex: 'oc', key: 'oc', align: 'center' },
        { title: 'Solicitante', dataIndex: 'solicitante', key: 'solicitante', align: 'center' },
        { title: 'Proveedor', dataIndex: 'proveedor', key: 'proveedor', align: 'center' },
        { title: 'CeCo', dataIndex: 'ceco', key: 'ceco', align: 'center' },
        { title: 'Fecha Creacion', dataIndex: 'fecha_creacion', key: 'fecha_creacion', align: 'center' },
        { title: 'Correos Enviados', dataIndex: 'correos_enviados', key: 'correos_enviados', align: 'center' },
        { title: 'Primer Correo', dataIndex: 'primer_correo', key: 'primer_correo', align: 'center' },
        { title: 'Ultimo Correo', dataIndex: 'ultimo_correo', key: 'ultimo_correo', align: 'center' },
        { title: 'Recepcion', dataIndex: 'recepcion', key: 'recepcion', align: 'center' },
        {
            title: 'Seleccionar',
            key: 'selection',
            align: 'center',
            render: (text, record) => {
                return (
                    <div className='flex justify-center gap-2'>
                        {

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
                        title: <a href="/requests">Inicio</a>,
                    },
                    {
                        title: 'Contabilidad',
                    },
                    {
                        title: 'Enviar Correo Recepcion',
                    }
                ]}

                className='text-sm mb-4'
            />
            <div className='flex justify-between flex-col lg:flex-row items-center mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Enviar Correo Recepcion
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-end justify-end gap-2 mb-4">
                <div className="flex-1 order-1">
                </div>
                <div className="flex gap-x-2 order-2">
                    <Email selectedRowKeys={selectedRowKeys} />
                </div>
                <Search onChange={handleSearch} />
            </div>

            <Table
                columns={columns}
                data={isNotEmpty(search.email) ? search.data : EnviarCorreoData}
            />
        </div>
    )
}

export default EnviarCorreo