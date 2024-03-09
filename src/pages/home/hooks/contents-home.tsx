import { MediaCard } from '@/components/media-card';
import { contentMediaApi } from '@/redux/services/content-media.api';
import { Link } from 'react-router-dom';

const ContentsHome = () => {
    const { data, isLoading, } = contentMediaApi.useGetContentMediaQuery()

    if (isLoading) {
        return <span>Cargando...</span>;
    }

    if (data && data?.length > 0 && !isLoading) {
        return (
            <section className='flex flex-row gap-8 overflow-y-auto'>
                {
                    data?.map(item => (
                        <Link to={`/media-details/${item.id}`} key={item.id}>
                            <MediaCard className='w-72 h-32' contentMedia={item} />
                        </Link>
                    ))
                }
            </section>
        )
    }

    return <h2 className='primary-btn inline-block text-transparent bg-clip-text text-xl font-bold'>No hay multimedia registrada en la base de datos</h2>
}

export { ContentsHome };

