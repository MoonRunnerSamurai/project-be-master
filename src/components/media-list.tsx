import { ContentMedia } from '@/models/content-media'
import { ListboxItem, Image } from '@nextui-org/react'
import React from 'react'

interface Props {
    contentMedia: ContentMedia
    key: number
}

const MediaList = ({ contentMedia, key }: Props) => {
    return (
        <ListboxItem key={key} textValue={"Videos"}>
            <div className="flex gap-2 items-center">
                <Image className="flex-shrink-0" sizes="sm" src={contentMedia.url_content} />
                <div className="flex flex-col">
                    <span className="text-small">{contentMedia.name_content}</span>
                </div>
            </div>
        </ListboxItem>
    )
}

export { MediaList }