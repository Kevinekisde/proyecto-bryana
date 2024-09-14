import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import LogoBlanco from '../../assets/LogoBlanco.png'

import { Button, Form, Input } from 'antd'
import { navigate } from 'gatsby'

function SignIn() {

    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        setLoading(true)
        navigate('/dashboard')
        setLoading(false)
    }

    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 bg-white'>
                <div className='hidden md:flex justify-center items-center min-h-screen bg-signIn'>
                    <div className='px-2 md:px-10 lg:px-28'>
                        <img src={LogoBlanco} alt='Logo' width={260} className='mb-6' />
                        <p className='text-simple !text-white text-xl pe-20'>
                            Bienvenido al portal de adquisiciones de TPC
                        </p>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-center min-h-screen px-4 md:px-0'>
                    <div className='w-full sm:w-4/5 lg:w-3/5 mb-8'>
                        <div className='bloc md:hidden'>
                            <img src={Logo} alt='Logo' width={260} className='mb-4 mx-auto' />
                        </div>
                        <p className='text-simple text-center text-sm px-4 md:hidden'>
                            Bienvenido al portal de adquisiciones de TPC
                        </p>
                        <p className='hidden md:inline-block text-center text-lg md:text-left'>
                            Iniciar sesión:
                        </p>
                    </div>
                    <Form onFinish={ onFinish }  name='signIn' autoComplete='off' className='form-expand w-full sm:w-4/5 lg:w-3/5'>
                        <Form.Item
                            name='username'
                            rules={[{ required: true, message: 'Por favor ingrese su correo electrónico' }]}
                        >
                            <Input
                                placeholder='Correo electrónico'
                                disabled={loading}
                            />

                        </Form.Item>
                        <Form.Item
                            name='password'
                            rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
                        >
                            <Input.Password
                                placeholder='Contraseña'
                                disabled={loading}
                            />
                        </Form.Item>

                        <Button
                            type='primary'
                            htmlType='submit'
                            block
                            loading={loading}
                            disabled={loading}
                        >
                            Iniciar sesión
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default SignIn