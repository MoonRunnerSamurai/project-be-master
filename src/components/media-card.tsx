import { ContentMedia } from '@/models/content-media';
import { useState } from 'react';
import { IoPlay } from "react-icons/io5";

interface Props {
    contentMedia: ContentMedia,
    className?: string
}

const MediaCard = ({ contentMedia, className }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <figure className={`relative rounded-lg overflow-hidden ${className} z-2`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${isHovered ? 'blur-lg' : ''}`} src={contentMedia.image_content} alt="Card background" />
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>

                <button className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-4">
                    <IoPlay />
                </button>
            </div>

            <figcaption className='primary-btn inline-block text-transparent bg-clip-text font-black absolute bottom-1 text-center text-base px-4'>{contentMedia.name_content}</figcaption>
        </figure>
    )
}

export { MediaCard };

