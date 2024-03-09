import { MediaDetails } from '@/components/media-details'
import { Sidenav } from '@/components/sidenav'
import { contentMediaApi } from '@/redux/services/content-media.api'
import { Button } from '@nextui-org/react'

const item = {
    categories_content: ['Tecnologia', 'Entretenimiento'],
    image_content: "https://i.ytimg.com/vi_webp/cYoF-NuKanQ/maxresdefault.webp",
    name_content: "Cómo Steve Jobs ARRUINÓ su vida (Y suplicó para volver a Apple)",
    sipnosis_content: "Chungo",
    url_content: "https://www.youtube.com/watch?v=cYoF-NuKanQ"
}



const ContentDetails = () => {
    const id = location.pathname.split("/").pop()
    const { data } = contentMediaApi.useGetContentMediaQuery()
    const detailsData = data?.find((item) => item.id === id)

    return (
        <div className='grid grid-cols-12 grid-rows-12 h-screen bg-gradient-primary'>
            <aside className='col-span-2 row-span-10'>
                <Sidenav />
            </aside>

            <div className='col-span-10 row-span-2 bg-gradient-to-r from-[#0B193F] via-[#18235E] to-[#140A3B] '>
                <div className='flex flex-row-reverse h-full items-center'>
                    <Button className='bg-white bg-opacity-10 text-white mr-10 rounded-3xl' >Cerrar sesion</Button>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-64 py-2 px-4 mr-10 text-white bg-white bg-opacity-10 rounded-full focus:outline-none focus:bg-opacity-100 transition-all duration-300 ease-in"
                    />
                </div>
            </div>


            <main className='col-span-10 row-span-10  rounded-3xl bg-gradient-to-b from-[#0E0B32]  to-[#040B23] overflow-y-scroll px-20 py-8'>
                <MediaDetails contentMedia={detailsData} />
            </main>
        </div>
    )
}

export { ContentDetails }

