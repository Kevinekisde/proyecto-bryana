import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { alertSuccess, alertError } from '../../../utils/alert'
import ProvidersData from '../../../data/Providers.json'

const Update = ({ proveedor }) => {

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

    useEffect(() => {
        if (modal) {
            console.log(proveedor)
            form.setFieldsValue(proveedor)
        }
    }, [modal, proveedor])


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
                        name="rut_Proveedor"
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
                        name="nombre_Fantasia"
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
                        name="iD_Bien_Servicio"
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
                        name="comuna"
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
                        name="telefono_Proveedor"
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