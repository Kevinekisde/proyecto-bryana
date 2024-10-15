import { Breadcrumb } from 'antd'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Template/Layout'
import Tickets from '../../../data/TicketsOc.json'

function RequestOcDetail({ id }) {

    const [request, setRequest] = useState({})

    const SearchRequest = (id) => {
        const search = Tickets.find(request => request.id == id)
        setRequest(search)
    }

    useEffect(() => {
        SearchRequest(id)
    }, [])


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
                        title: `Detalle de solicitud`,
                    },
                ]}
                className='text-sm mb-4'
            />

            <div className=''>

                <h1>
                    Detalle de solicitud {request.id}
                </h1>

                <div className='flex flex-col gap-5 mt-5 listProvider'>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Nº Ticket
                        </span>
                        {request.ticket}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Tipo de solicitud
                        </span>
                        {request.type}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>

                        <span className='font-bold mr-3'>
                            Estado
                        </span>
                        {request.status}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Fecha
                        </span>
                        {request.fecha}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Nº Solped
                        </span>
                        {request.solped}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Nº OC
                        </span>
                        {request.oc}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Proveedor
                        </span>
                        {request.provider}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Detalle
                        </span>
                        {request.detalle}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            solicitante
                        </span>
                        {request.solicitante}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Orden estadistica
                        </span>
                        {request.orden_estadistica}
                    </p>

                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Razon social
                        </span>
                        {request.razon_social}
                    </p>

                </div>

            </div>

        </Layout>
    )
}

export default RequestOcDetail