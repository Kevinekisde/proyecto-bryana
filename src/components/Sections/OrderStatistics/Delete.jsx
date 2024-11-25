import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { FaRegTrashAlt } from "react-icons/fa";


function Delete({ order }) {

    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <div>

            <Button
                className="px-2"
                onClick={() => setModal(true)}
            >
                {loading ? <LoadingOutlined /> : <FaRegTrashAlt twoToneColor="#52c41a" />}
            </Button>
            {
                modal && <Modal
                    open={modal}
                    title="Eliminar Orden"
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
                    <div className="flex items-center justify-center gap-2">
                        <p>¿Estás seguro que deseas eliminar la orden <b>{order.Nombre}</b>?</p>
                        <Button
                            className="px-2"
                            onClick={() => setModal(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            className="px-2"
                            onClick={() => setModal(false)}
                        >
                            Eliminar
                        </Button>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Delete