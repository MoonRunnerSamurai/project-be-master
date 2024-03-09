import helldivers from '@/assets/helldivers-2.avif'
import BannerCard from '@/components/banner-card'
import { Sidenav } from '@/components/sidenav'
import { AuthContext } from '@/hooks/useAuth'
import { Auth } from '@/types'
import { Avatar, Button } from '@nextui-org/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CategoriesHome } from './hooks/categories-home'
import { ContentsHome } from './hooks/contents-home'



const Home = () => {

    const { logoutUser, user } = useContext(AuthContext) as Auth

    return (
        <div className='grid grid-cols-12 grid-rows-12 h-screen bg-gradient-primary'>
            <aside className='col-span-2 row-span-10'>
                <Sidenav />
            </aside>

            <div className='col-span-10 row-span-2 bg-gradient-to-r from-[#0B193F] via-[#18235E] to-[#140A3B] '>
                <div className='flex flex-row-reverse h-full items-center'>
                    <Button className='bg-white bg-opacity-10 text-white mr-10 rounded-3xl' onClick={logoutUser}>Cerrar sesion</Button>
                    <Avatar className='mr-4 bg-opacity-10 text-white' name={user.email_user} />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-64 py-2 px-4 mr-10 text-white bg-white bg-opacity-10 rounded-full focus:outline-none focus:bg-opacity-100 transition-all duration-300 ease-in"
                    />
                </div>
            </div>

            <main className='col-span-10 row-span-10 rounded-3xl bg-gradient-to-b from-[#0E0B32] to-[#040B23] overflow-y-scroll px-20 py-8 flex flex-col gap-14'>
                <section className='flex flex-row h-64 bg-gradient-to-b from-[#060B29] to-[#0E0D39]'>
                    <div className='h-full w-full'>
                        <BannerCard bannerCard={{ title_banner: "Helldivers 2", image_banner: helldivers, description_banner: "lístate en los Helldivers y únete a la lucha por la libertad en una galaxia hostil", url_banner: "" }} />
                    </div>
                </section>

                <section className='flex flex-col gap-8'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white font-bold'>Categorias que te podrian gustar</h2>
                        <Link to="/categories" className='primary-btn inline-block text-transparent bg-clip-text text-xl font-bold'>Ver mas</Link>
                    </div>

                    <CategoriesHome />
                </section>

                <section className='flex flex-col gap-8'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white font-bold'>Videos destacados</h2>
                    </div>

                    <ContentsHome />
                </section>
            </main>
        </div>
    )
}

export { Home }

