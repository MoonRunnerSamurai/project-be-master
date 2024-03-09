import { Button } from '@nextui-org/react'

interface Props {
    bannerCard: {
        image_banner: string,
        title_banner: string,
        description_banner: string
        url_banner: string

    }
}

const BannerCard = ({ bannerCard }: Props) => {
    return (
        <div className='w-full h-full rounded-3xl relative overflow-hidden'>
            <img className="object-cover h-full w-full" src={bannerCard.image_banner} alt="Card background" />
            <div className="absolute inset-0 w-72 ml-10 flex items-center justify-start">
                <div className="bg-transparent bg-opacity-25 rounded-lg p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">{bannerCard.title_banner} </h3>
                    <p className="text-sm text-white">{bannerCard.description_banner} </p>
                    <Button size='sm' className='primary-btn text-white w-full mt-4 rounded-3xl'>Ver</Button>
                </div>
            </div>
        </div>
    )
}

export default BannerCard