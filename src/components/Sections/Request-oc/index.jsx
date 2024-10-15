import { Breadcrumb, Button } from 'antd'
import React from 'react'
import Table from '../../Template/Table'
import Tickets from '../../../data/TicketsOc.json'
import { BiCheck, BiCheckDouble, BiX } from 'react-icons/bi'
import StatusText from '../../Template/StatusText'
import { FaEye } from 'react-icons/fa'
import { Link } from 'gatsby'

function RequestOC() {

    const columns = [
        { title: 'Nº Ticket', dataIndex: 'ticket', key: 'name', align: 'left', responsive: ['md'] },
        { title: 'Tipo de solicitud', dataIndex: 'type', key: 'type', align: 'left', responsive: ['md'] },
        { title: 'Estado', dataIndex: 'status', key: 'status', align: 'center', render: (text, record) => <StatusText status={record.status} /> },
        { title: 'Fecha', dataIndex: 'fecha', key: 'date', align: 'center', responsive: ['md'] },
        { title: 'Nº Solped', dataIndex: 'solped', key: 'solped', align: 'center' },
        { title: 'Nº OC', dataIndex: 'oc', key: 'oc', align: 'center' },
        { title: 'Proveedor', dataIndex: 'provider', key: 'provider', align: 'center' },
        { title: 'Detalle', dataIndex: 'detalle', key: 'detail', align: 'center' },
        // {
        //     title: 'Recepcion', key: 'recepcion', align: 'center', render: (text, record) => {
        //         return (
        //             <div className='flex justify-center gap-2'>
        //                 {
        //                     record.status == 'OC Enviada' ?
        //                         <div className='flex justify-center gap-2'>
        //                             <Button className='px-2'>
        //                                 <BiCheckDouble />
        //                             </Button>
        //                             <Button className='px-2'>
        //                                 <BiCheck />
        //                             </Button>
        //                             <Button className='px-2'>
        //                                 <BiX />
        //                             </Button>
        //                         </div>
        //                         : ''
        //                 }
        //             </div>
        //         )
        //     }
        // }
        {
            title: 'Ver', key: 'detail', align: 'left', responsive: ['md'], render: (text, record) => <Link to={`/requests-oc/${record.id}`} >
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

            <Table
                columns={columns}
                data={Tickets}
            />
        </div>
    )
}

export default RequestOC