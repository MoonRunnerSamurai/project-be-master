import { AuthContext } from '@/hooks/useAuth';
import { Auth } from '@/types';
import { Button, Input } from '@nextui-org/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoLogIn } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormLogin = () => {

    const { loginUser } = useContext(AuthContext) as Auth
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [errorInput, setErrorInput] = useState(false)

    const handleLogin = async (user: any) => {
        try {
            await loginUser(user)
        } catch (error) {
            toast(error)
        }

    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-8'>
            <div className="flex flex-col gap-8">
                <Input className='w-full' type='email' label='Correo electronico' {...register('email_user', { required: true })} onChange={() => setErrorInput(false)} />
                {errors?.email_user && errorInput && <p>El correo es requerido</p>}

                <Input className='w-full' type='password' label='Contraseña' {...register('password_user', { required: true })} onChange={() => setErrorInput(false)} />
                {errors?.email_user && errorInput && <p>La contraseña es requerida</p>}
            </div>


            <Button type='submit' className='primary-btn w-full rounded-3xl text-white'>
                <IoLogIn />
                Iniciar sesion
            </Button>

            <ToastContainer />
        </form>
    )
}

export { FormLogin };

