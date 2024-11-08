import React from 'react'
import Layout from '../../../../components/Template/Layout'
import { Breadcrumb } from 'antd'
import Table from '../../../../components/Template/Table'


function index({ location }) {

    const { ticket } = location.state

    const columns = [
        { title: 'Pos', dataIndex: 'pos', key: 'pos', align: 'left', responsive: ['md'] },
        { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad', align: 'left', responsive: ['md'] },
        { title: 'Moneda', dataIndex: 'moneda', key: 'moneda', align: 'center', responsive: ['md'] },
        { title: 'Prc Neto', dataIndex: 'prc_neto', key: 'prc_neto', align: 'center', responsive: ['md'] },
        { title: 'Proveedor', dataIndex: 'proveedor', key: 'proveedor', align: 'center', responsive: ['md'] },
        { title: 'Texto Breve', dataIndex: 'texto_breve', key: 'texto_breve', align: 'center', responsive: ['md'] },
        { title: 'Material', dataIndex: 'material', key: 'material', align: 'center', responsive: ['md'] },
        { title: 'Valor Neto', dataIndex: 'valor_neto', key: 'valor_neto', align: 'center', responsive: ['md'] },
        
    ]



    return (
        <Layout>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/dashboard">Inicio</a>,
                    },
                    {
                        title: <a href="/requests-oc">
                            Solicitudes OC
                        </a>,
                    },
                    {
                        title: `Confirmación recepción`,
                    },
                ]}
                className='text-sm mb-4'
            />
            <div className='w-full flex flex-col gap-5 items-start'>
                <h1 className='font-bold mb-3'>
                    Solicitud OC
                </h1>
                <div className='grid grid-cols-1 gap-3 w-full'>
                    <div className='grid grid-cols-2 justify-between gap-5 md:w-1/3'>
                        <p>
                            N° Ticket:
                        </p>
                        <p className=''>
                            {location.state.ticket.ticket}
                        </p>

                    </div>
                    <div className='grid grid-cols-2 justify-between gap-5 md:w-1/3'>
                        <p>
                            N ° Orden de compra:
                        </p>
                        <p className=''>
                            {location.state.ticket.oc}
                        </p>

                    </div>

                </div>
                <h1 className='font-bold mb-3'>
                    Proveedor
                </h1>
                <div className='grid grid-cols-1 gap-3 w-full'>
                    <div className='grid grid-cols-2 justify-between gap-5 md:w-1/3'>
                        <p>
                            Razon social:
                        </p>
                        <p className=''>
                            {location.state.ticket.razon_social}
                        </p>

                    </div>
                    <div className='grid grid-cols-2 justify-between gap-5 md:w-1/3'>
                        <p>
                            Nombre Fantasia:
                        </p>
                        <p className=''>
                            sadsadsasaddsadsa
                        </p>

                    </div>
                    <div className='grid grid-cols-2 justify-between gap-5 md:w-1/3'>
                        <p>
                            Detalle:
                        </p>
                        <p className=''>
                            {location.state.ticket.detalle ? location.state.ticket.detalle : 'Sin detalle'}
                        </p>
                    </div>
                </div>
                <h1 className='font-bold my-5'>
                    Partes
                </h1>
                <Table
                    data={ticket.partes}
                    columns={columns} />
            </div>


        </Layout>
    )
}

export default index