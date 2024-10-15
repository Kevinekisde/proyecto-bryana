import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { alertSuccess, alertError } from '../../../utils/alert'
import ProvidersData from '../../../data/Providers.json'

const Update = ({ id }) => {

    const [form] = Form.useForm()

    const [provider, setProvider] = useState({})

    const [loading, setLoading] = useState(false)

    const [modal, setModal] = useState(false)

    const onFinish = () => {

        setLoading(true)
        setModal(false)
        setLoading(false)
        alertSuccess({ message: `Usuario actualizado con éxito` })
    }

    const SearchProvider = (id) => {
        const search = ProvidersData.find(provider => provider.id == id)
        setProvider(search)
    }

    useEffect(() => {
        SearchProvider(id)
    }, [])


    useEffect(() => {
        if (modal) {
            console.log(provider)
            form.setFieldsValue(provider)
        }
    }, [modal, provider])


    return (
        <div>
            <Button
                className="px-2"
                onClick={() => setModal(true)}
            >
                {loading ? <LoadingOutlined /> : <EditOutlined twoToneColor="#52c41a" />}
            </Button>

            {modal && <Modal
                open={modal}
                title="Editar Proveedor"
                centered
                zIndex={3000}
                closable={true}
                destroyOnClose={true}
                maskClosable={false}
                keyboard={false}
                onCancel={() => setModal(false)}
                footer={null}
                width={600}
            >

                <Form form={form} name="edit" onFinish={onFinish} preserve={false} className="pt-4 pb-2">

                    <Form.Item
                        className="mb-2"
                        name="rut"
                        rules={[{
                            required: true,
                            message: 'Ingrese Rut de Proveedor'
                        }]}
                    >
                        <Input
                            placeholder="Rut"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="company_name"
                        rules={[
                            {
                                required: true,
                                message: 'Ingrese Nombre de Proveedor'
                            }
                        ]}
                    >
                        <Input
                            placeholder="Nombre"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="fantasy_name"
                        rules={[{
                            required: true,
                            message: 'Ingrese Nombre Fantasía'
                        }]}
                    >
                        <Input
                            placeholder="Nombre Fantasía"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-0"
                        name="bien_servicio"
                        rules={[{
                            required: true,
                            message: 'Ingrese Bien/Servicio'
                        }]}
                    >
                        <Input
                            placeholder="Bien/Servicio"
                            disabled={loading}
                        />
                    </Form.Item>
                    <Form.Item
                        className="mb-0"
                        name="commune"
                        rules={[{
                            required: true,
                            message: 'Ingrese Comuna'
                        }]}
                    >
                        <Input
                            placeholder="Comuna"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-0"
                        name="contact"
                        rules={[{
                            required: true,
                            message: 'Ingrese Contacto'
                        }]}
                    >
                        <Input
                            placeholder="Contacto"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="mt-4 px-5"
                        loading={loading}
                        disabled={loading}
                        block={true}
                    >
                        Guardar
                    </Button>

                </Form>
            </Modal>}
        </div>
    )
}

export default Update