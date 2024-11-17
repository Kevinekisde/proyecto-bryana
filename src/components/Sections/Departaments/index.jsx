import { Breadcrumb, Table } from 'antd'
import React, { useState } from 'react'
import DepartamentosData from '../../../data/Departamentos.json'
import Create from './Create'
import Update from './Update'
import Actions from './Actions'
import Search from './Search'
import { normalizeText } from '../../../utils/paragraph'
import { isNotEmpty } from '../../../utils/validations'

function Departaments() {

    const [search, setSearch] = useState({
        data: [],
        departament: ''
    })

    const handleSearch = e => {
        const departament = normalizeText(e.target.value)
        const result = DepartamentosData.filter(u => normalizeText(u.Nombre).includes(departament) || normalizeText(u.Descripcion).includes(departament) || normalizeText(u.Encargado).includes(departament))
        setSearch({
            data: result,
            departament
        })
    }

    const columns = [
        { title: 'Id', dataIndex: 'id_Departamento', key: 'id_Departamento', align: 'left', responsive: ['md'] },
        { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre', align: 'left', responsive: ['md'] },
        { title: 'Descripcion', dataIndex: 'Descripcion', key: 'Descripcion', align: 'center' },
        { title: 'Encargado', dataIndex: 'Encargado', key: 'Encargado', align: 'center' },
        {
            title: 'Acciones', key: 'edit', align: 'center', responsive: ['md'], render: (text, record) => <Actions departamento={record} />
        },

    ]
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/requests">Inicio</a>,
                    },
                    {
                        title: 'Lista de departamentos',
                    },
                ]}
                className='text-sm mb-4'
            />
            <div className='flex flex-col mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Departamentos
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4">
                <div className="flex-1 order-1">

                </div>
                <div className="flex gap-x-2 order-2">
                    <Create />
                </div>
                <Search onChange={handleSearch} />
            </div>
            <Table
                columns={columns}
                dataSource={isNotEmpty(search.departament) ? search.data : DepartamentosData}
                rowKey='id_Departamento'
            />
        </div>
    )
}

export default Departaments