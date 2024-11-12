import { Breadcrumb } from 'antd'
import React, { useState } from 'react'
import Table from '../../Template/Table'
import UsuariosData from '../../../data/Usuarios.json'
import Search from './Search'
import { normalizeText } from '../../../utils/paragraph'
import { isNotEmpty } from '../../../utils/validations'
import Create from './Create'

function Usuarios() {

    const [search, setSearch] = useState({
        data: [],
        user: ''
    })


    const handleSearch = e => {
        const user = normalizeText(e.target.value)
        const result = UsuariosData.filter(t => normalizeText(t.Nombre_Usuario).includes(user) || normalizeText(t.Apellido_Paterno).includes(user) || normalizeText(t.Apellido_Materno).includes(user) || normalizeText(t.Correo_Usuario).includes(user) || normalizeText(t.Departamento).includes(user) || normalizeText(t.rol).includes(user) || normalizeText(t.Centro_Costo).includes(user))
        setSearch({
            data: result,
            user
        })
    }


    const columns = [
        {
            title: 'Nombre', dataIndex: 'nombre', key: 'name', align: 'left', responsive: ['md'], render: (text, record) =>
                <p>
                    {record.Nombre_Usuario} {record.Apellido_Paterno} {record.Apellido_Materno}`
                </p>
        },
        { title: 'Correo', dataIndex: 'Correo_Usuario', key: 'Correo_Usuario', align: 'left', responsive: ['md'] },
        { title: 'Departamento', dataIndex: 'Departamento', key: 'Departamento', align: 'center', responsive: ['md'] },
        { title: 'Rol', dataIndex: 'rol', key: 'rol', align: 'center', responsive: ['md'] },
        { title: 'Centro de costos', dataIndex: 'Centro_Costo', key: 'Centro_Costo', align: 'center', responsive: ['md'] },
    ]


    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/dashboard">Inicio</a>,
                    },
                    {
                        title: 'Administracion',
                    },
                    {
                        title: 'Gestion de Usuarios',
                    }
                ]}
                className='text-sm mb-4'
            />
            <div className='flex justify-between flex-col lg:flex-row items-center mb-4'>
                <p className='font-semibold text-lg leading-none'>
                    Usuarios
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
                data={isNotEmpty(search.user) ? search.data : UsuariosData}
            />
        </div>
    )
}

export default Usuarios