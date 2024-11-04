import React, { useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { alertSuccess } from '../../../utils/alert'
import Providers from '../../../service/Providers'

const Create = ({ refetch }) => {

    const [loading, setLoading] = useState(false)

    const [modal, setModal] = useState(false)

    const onFinish = values => {


        setLoading(true)
        try {

            Providers.post(values)
                .then((response) => {
                    setLoading(false)
                    setModal(false)
                    alertSuccess({ message: `Departamento creado con éxito` })
                    refetch()
                })

        } catch (e) {
            console.log(e)
            setLoading(false)
            setModal(false)
        }
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
                title="Agregar Departamento"
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
                        name="Descripcion"
                        rules={[{
                            required: true,
                            message: 'Ingrese Descripcion'
                        }]}
                    >
                        <Input
                            placeholder="Descripcion"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        className="mb-2"
                        name="Encargado"
                        rules={[{
                            required: true,
                            message: 'Ingrese Encargado'
                        }]}
                    >
                        <Input
                            placeholder="Encargado"
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
                        Crear
                    </Button>

                </Form>
            </Modal>}
        </div>
    )
}

export default Create