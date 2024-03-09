import { CategoryCard } from '@/components/category-card'
import { categoryMediaApi } from '@/redux/services/category-media.api'
import { Link } from 'react-router-dom'

const CategoriesHome = () => {

    const { data, isLoading, isSuccess, error } = categoryMediaApi.useGetCategoriesQuery()

    if (isLoading) {
        return <span className='text-white'>Cargando...</span>
    }

    if (data && data?.length > 0 && !isLoading) {
        return (
            <section className='flex gap-8 w-full overflow-x-auto overflow-hidden'>
                {
                    data?.slice(0, 6).map(item => (
                        <Link to={`/category-details/${item.id}`} key={item.id}>
                            <CategoryCard className='min-h-48 min-w-80 rounded-3xl overflow-hidden' categoryMedia={item} imgClassName='w-full h-full' />
                        </Link>
                    ))
                }
            </section>
        )
    }

    return <h2 className='primary-btn inline-block text-transparent bg-clip-text text-xl font-bold'>No hay categorias registradas en la base de datos</h2>

}

export { CategoriesHome }

