import { AuthContext } from "@/hooks/useAuth";
import { Auth } from "@/types";
import { Button, Input } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [errorInput, setErrorInput] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { registerUser } = useContext(AuthContext) as Auth

  const handleSignUp = async (values: any) => {
    try {
      await registerUser(values)
    } catch (error) {
      toast(error)
    }
  }

  return (
    <main className='bg-gray-100 flex items-center justify-center h-screen gradient-bg'>
      <section className="flex flex-col bg-white p-8 rounded shadow-md w-full sm:w-4/5  md:w-1/2 lg:w-1/3">
        <form onSubmit={handleSubmit(handleSignUp)} className="flex gap-8 flex-col">
          <Input className='w-full' type='email' label='Correo electronico'{...register('email_user', { required: true })} onChange={() => setErrorInput(false)} />
          {errors?.email_user && errorInput && <p>El correo es requerido</p>}

          <Input className='w-full' type='password' label='Contraseña'{...register('password_user', { required: true })} onChange={() => setErrorInput(false)} />
          {(errors?.password_user && errorInput) && <p>La contraseña es requerida</p>}


          <Button type='submit' className='primary-btn w-full rounded-3xl text-white'>
            Registrarme
          </Button>
        </form>

        <ToastContainer />

        <p className="text-sm mt-4">¿Ya tienes una cuenta? <Link to="/" className="text-blue-500 hover:underline">Iniciar sesión</Link></p>
      </section>
    </main>
  )
}