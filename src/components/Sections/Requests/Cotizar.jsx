import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { MdEmail } from 'react-icons/md'

function Cotizar() {

    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)


    const onFinish = values => {

        setLoading(true)
        try {

            setTimeout(() => {
                setLoading(false)
                setModal(false)
                form.resetFields()
            }
                , 2000)

        } catch (e) {
            console.log(e)
            setLoading(false)
            setModal(false)
        }
    }

    return (
        <div>
            <Button
                className="px-2"
                onClick={() => setModal(true)}
            >
                {loading ? <LoadingOutlined /> : <MdEmail twoToneColor="#52c41a" />}
            </Button>
            {
                modal && <Modal
                    open={modal}
                    title="Enviar Cotizacion"
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
                    <Form name='cotizar' onFinish={onFinish} preserve={false} className="pt-4 pb-2">
                        <Form.Item
                            className="mb-2"
                            name="asunto"
                            rules={[{
                                required: true,
                                message: 'Ingrese el asunto'
                            }]}
                        >
                            <Input
                                placeholder="Asunto"
                                disabled={loading}
                            />
                        </Form.Item>
                        <Form.Item
                            className="mb-2"
                            name="bien_servicio"
                            rules={[{
                                required: true,
                                message: 'Ingrese el bien o servicio'
                            }]}
                        >
                            <Select
                                placeholder="Bien o Servicio"
                                disabled={loading}
                                options={[
                                    { value: '1', label: 'Bien o Servicio 1' },
                                    { value: '2', label: 'Bien o Servicio 2' },
                                    { value: '3', label: 'Bien o Servicio 3' },
                                    { value: '4', label: 'Bien o Servicio 4' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            name="Proveedores"
                            rules={[{
                                required: true,
                                message: 'Ingrese la Proveedores'
                            }]}
                        >
                            <Select
                                mode='multiple'
                                placeholder="Proveedores"
                                disabled={loading}
                                options={[
                                    { value: '1', label: 'Proveedor 1' },
                                    { value: '2', label: 'Proveedor 2' },
                                    { value: '3', label: 'Proveedor 3' },
                                    { value: '4', label: 'Proveedor 4' },
                                ]}
                            />

                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            name="Mensaje"
                            rules={[{
                                required: true,
                                message: 'Ingrese el mensaje'
                            }]}
                        >
                            <Input.TextArea
                                placeholder="Mensaje"
                                disabled={loading}
                            />
                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            name={'file'}
                            rules={[{
                                required: true,
                                message: 'Ingrese el archivo'
                            }]}
                        >
                            <Input type="file" />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="mt-4 px-5"
                            loading={loading}
                            disabled={loading}
                            block={true}
                        >
                            Enviar
                        </Button>

                    </Form>
                </Modal>

            }
        </div>
    )
}

export default Cotizar