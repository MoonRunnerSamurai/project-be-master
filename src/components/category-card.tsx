import { CategoryMedia } from '@/models/categories-media'

interface Props {
    categoryMedia: CategoryMedia,
    className?: string,
    imgClassName?: string
}

const CategoryCard = ({ categoryMedia, className, imgClassName }: Props) => {
    return (
        <figure className={`${className} relative`}>
            <img src={categoryMedia.url_category} alt="Imagen de categoría" className={imgClassName} />
            <figcaption className='absolute bottom-0 text-center text-slate-300 font-bold text-2xl py-4 px-8'>{categoryMedia.name_category}</figcaption>
        </figure>
    )
}

export { CategoryCard }

