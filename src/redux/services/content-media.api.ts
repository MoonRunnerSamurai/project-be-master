import { ContentMedia } from "@/models/content-media";
import { apiService } from "@/services/api.service";
import { firestore } from '@/services/firebase.service';
import { collection, getDocs } from 'firebase/firestore';

const contentMediaApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getContentMedia: builder.query<Array<ContentMedia>, void>({
            providesTags: ['ContentMedia'],
            keepUnusedDataFor: 3600,
            async queryFn() {
                try {
                    const ref = collection(firestore, 'content-media')
                    const querySnapshot = await getDocs(ref)
                    const ContentsMedia: Array<ContentMedia> = []

                    querySnapshot?.forEach((doc) => {
                        ContentsMedia.push({ id: doc.id, ...doc.data() as ContentMedia })
                    })

                    return { data: ContentsMedia }
                } catch (error: any) {
                    return { error: error.message }
                }
            },
        })
    })
})

export { contentMediaApi };

