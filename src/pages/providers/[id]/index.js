import React, { useEffect, useState } from 'react'
import ProvidersData from '../../../data/Providers.json'
import Layout from '../../../components/Template/Layout'
import { Breadcrumb } from 'antd'


function ProviderDetail({ id }) {

    const [provider, setProvider] = useState({})

    const SearchProvider = (id) => {
        const search = ProvidersData.find(provider => provider.id == id)
        setProvider(search)
    }

    useEffect(() => {
        SearchProvider(id)
    }, [])


    return (
        <Layout>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/dashboard">Inicio</a>,
                    },
                    {
                        title: <a href="/providers">
                            Lista de proveedores
                        </a>,
                    },
                    {
                        title: `Proveedor ${provider.id}`,
                    },
                ]}
                className='text-sm mb-4'
            />
            <div className=''>
                <h1>
                    Ficha Proveedor {provider.id}
                </h1>
                <div className='flex flex-col gap-5 mt-5 listProvider'>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Rut Empresa
                        </span>
                        {provider.rut}
                    </p>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Razon Social
                        </span>
                        {provider.company_name}
                    </p>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Nombre Fantasia
                        </span>
                        {provider.fantasy_name}
                    </p>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Bien/Servicio
                        </span>
                        {provider.bien_servicio}
                    </p>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Comuna
                        </span>
                        {provider.commune}
                    </p>
                    <p className='grid grid-cols-2 w-1/4'>
                        <span className='font-bold mr-3'>
                            Contacto
                        </span>
                        {provider.contact}
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default ProviderDetail