import { ContentMedia } from '@/models/content-media'
import ReactPlayer from 'react-player/youtube'

interface Props {
    contentMedia: ContentMedia
}

const MediaDetails = ({ contentMedia }: Props) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <ReactPlayer url={contentMedia.url_content} controls={true} />
            <h2 className='primary-btn inline-block text-transparent bg-clip-text text-xl font-bold'>{contentMedia.name_content} </h2>
            <span className='text-white'>{contentMedia.sipnosis_content} </span>
        </div>
    )
}

export { MediaDetails }
