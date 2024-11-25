import { Button, Modal, Steps } from 'antd'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { LoadingOutlined } from '@ant-design/icons'

function Cart() {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <div>
            <Button
                className="px-2"
                onClick={() => setModal(true)}
            >
                {loading ? <LoadingOutlined /> : <FaShoppingCart twoToneColor="#52c41a" />}
            </Button>
            {
                modal && <Modal
                    open={modal}
                    title="Estado de la Orden"
                    centered
                    zIndex={3000}
                    closable={true}
                    destroyOnClose={true}
                    maskClosable={false}
                    keyboard={false}
                    onCancel={() => setModal(false)}
                    footer={null}
                    width={1000}
                >
                    <div className="flex items-center justify-center gap-2 p-5">
                        <Steps
                            progressDot
                            current={4}
                            items={[
                                {
                                    title: 'Ticket Recibido',
                                    description: '30/10/2024'

                                },
                                {
                                    title: 'Liberada Depto',
                                    description: 'Solicitante',
                                },
                                {
                                    title: 'Liberada Finanzas',
                                },
                                {
                                    title: 'OC Enviada',
                                    description: '05/11/2024',
                                },
                                {
                                    title: 'Espera Recepción',
                                },
                            ]}
                        />
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Cart