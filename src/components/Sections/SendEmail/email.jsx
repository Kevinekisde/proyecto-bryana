import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'

function Email({ selectedRowKeys }) {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    return (
        <div>
            <Button
                className="px-5"
                onClick={() => setModal(true)}
            >
                <MdEmail size={20} />
                Enviar Correo
            </Button>
            {
                modal && <Modal
                    open={modal}
                    title="Enviar Correo"
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
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>{
                            selectedRowKeys.length > 0
                                ?
                                `
                                Se enviaran correos a el/los solicitantes seleccionados
                                `
                                : `No se ha seleccionado ninguna solicitud se enviara un correo a todos los solicitantes`

                        }</p>
                        <div className='flex  gap-5 items-center'>
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
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Email