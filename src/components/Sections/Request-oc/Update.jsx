import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { alertSuccess } from '../../../utils/alert'
import Providers from '../../../service/Providers'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'

const  Update = ({ solicitud }) => {


    const [form] = Form.useForm()

    const [loading, setLoading] = useState(false)

    const [modal, setModal] = useState(false)

    const onFinish = values => {

        setLoading(true)
        try {

            Providers.post(values)
                .then((response) => {
                    setLoading(false)
                    setModal(false)
                    alertSuccess({ message: `Solicitud Actualizada con éxito` })

                })

        } catch (e) {
            setLoading(false)
            setModal(false)
        }
    }

    useEffect(() => {
        if (modal) {
            form.setFieldsValue(solicitud)
        }
    }, [modal, solicitud])

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
                title="Editar Solicitud"
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
                        name="solped"
                        rules={[{
                            required: true,
                            message: 'Ingrese N° Solped'
                        }]}
                    >
                        <Input
                            placeholder="N° Solped"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="detalle"
                        rules={[{
                            required: true,
                            message: 'Ingrese Detalle'
                        }]}
                    >
                        <Input
                            placeholder="Detalle"
                            disabled={loading}
                        />
                    </Form.Item>



                    <Form.Item
                        className="mb-2"
                        name="provider"
                        rules={[{
                            required: true,
                            message: 'Ingrese Proveedor'
                        }]}
                    >
                        <Input
                            placeholder="Ingrese Proveedor"
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
                        Editar
                    </Button>

                </Form>
            </Modal>}
        </div>
    )
}

export default Update