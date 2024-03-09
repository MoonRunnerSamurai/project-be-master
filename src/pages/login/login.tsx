import { Button } from '@nextui-org/react';
import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitter } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FormLogin } from './hooks/form-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <main className='bg-gray-100 flex items-center justify-center h-screen gradient-bg hove:sca'>
            <section className="flex flex-col  bg-white p-8 rounded shadow-md w-full sm:w-4/5  md:w-1/2 lg:w-1/3">

                <h2 className="text-2xl font-bold mb-6">Bienvenido</h2>

                <section className='flex flex-col gap-8'>
                    <FormLogin />

                  {/*   <div className='flex flex-row gap-5 justify-center'>
                        <Button isIconOnly variant='bordered' className=' rounded-3xl text-orange-400 '>
                            <IoLogoFacebook />
                        </Button>
                        <Button isIconOnly variant='bordered' className=' rounded-full text-orange-400 '>
                            <IoLogoGoogle />
                        </Button>
                        <Button isIconOnly variant='bordered' className='  rounded-3xl text-orange-400 '>
                            <IoLogoTwitter />
                        </Button>
                    </div> */}

                </section>
                <p className="text-sm mt-4">¿No tienes cuenta? <Link to="/sign-up" className="text-blue-500 hover:underline">Registrarse</Link></p>
            </section>
        </main>
    )
}

export { Login };

