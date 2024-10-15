import React, { useState } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { alertSuccess, alertError } from '../../../utils/alert'

const Create = () => {

    const [loading, setLoading] = useState(false)

    const [modal, setModal] = useState(false)

    const onFinish = values => {

        setLoading(true)
        setModal(false)
        setLoading(false)
        alertSuccess({ message: `Proveedor creado con éxito` })
    }

    return (
        <div>
            <Button
                className="px-5"
                onClick={() => setModal(true)}
            >
                Agregar
            </Button>

            {modal && <Modal
                open={modal}
                title="Agregar Proveedor"
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

                <Form name="create" onFinish={onFinish} preserve={false} className="pt-4 pb-2">

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

export default Create