import React, { useState } from 'react'
import { Form, Input, Button, Select, DatePicker, Steps, Breadcrumb } from 'antd'
import Modalidad from './modalidad'
import Solicitud from './solicitud'
import BackButton from '../Template/Backbutton'

function Create() {
    const [form] = Form.useForm()
    const [step, setStep] = useState(0)
    const [data, setData] = useState(null)
    const [modalidadState, setModalidadState] = useState(null)
    const [tipoSolicitud, setTipoSolicitud] = useState(null)
    const [loadingForm, setLoadingForm] = useState(false)

    const nextStep = async () => {
        await form.validateFields()
            .then(response => setStep(step + 1))
            .catch(error => console.log(error))
    }

    const previousStep = () => setStep(step - 1)
    const stepProps = { Form, nextStep, previousStep, data, setData, loadingForm, setModalidadState, modalidadState, tipoSolicitud, setTipoSolicitud }

    return (
        <div className="bg-white lg:shadow p-5 lg:p-5 lg:rounded flex flex-col items-center justify-center">

            <Breadcrumb
                items={[
                    {
                        title: <a href="/dashboard">Inicio</a>,
                    },
                    {
                        title: 'Crear solicitud',
                    },
                ]}

                className='text-sm mb-4'
            />

            <h1>Nueva solicitud</h1>

            <div className="w-full lg:w-2/4 mt-8">
                <Form name='solicitud' form={form} className='flex flex-col gap-5' disabled={loadingForm}>
                    <Steps current={step} responsive={false} items={[
                        { title: 'Modalidad' },
                        { title: 'Tipo de solicitud' },
                    ]} />
                    {
                        step === 0 &&
                        <Solicitud {...stepProps} />
                    }
                    {
                        step === 1 &&
                        <Modalidad {...stepProps} />
                    }
                </Form>
                <BackButton />

            </div>
        </div>
    )
}

export default Create