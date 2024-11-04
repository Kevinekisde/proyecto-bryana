import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { alertSuccess } from '../../../utils/alert'
import Providers from '../../../service/Providers'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'

const Update = ({ order }) => {

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
                    alertSuccess({ message: `Orden Actualizada con éxito` })

                })

        } catch (e) {
            setLoading(false)
            setModal(false)
        }
    }

    useEffect(() => {
        if (modal) {
            form.setFieldsValue(order)
        }
    }, [modal, order])

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
                title="Editar Orden"
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
                        name="Nombre"
                        rules={[{
                            required: true,
                            message: 'Ingrese Nombre'
                        }]}
                    >
                        <Input
                            placeholder="Nombre"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="Codigo_Nave"
                        rules={[{
                            required: true,
                            message: 'Ingrese Codigo'
                        }]}
                    >
                        <Input
                            placeholder="Codigo"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="Centro_de_Costo"
                        rules={[{
                            required: true,
                            message: 'Ingrese Centro de Costo'
                        }]}
                    >
                        <Input
                            placeholder="Centro de Costo"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="id_Orden_Compra"
                        rules={[{
                            required: true,
                            message: 'Ingrese Orden de Compra'
                        }]}
                    >
                        <Input
                            placeholder="Orden de Compra"
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