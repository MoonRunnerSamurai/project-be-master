import { CategoryMedia } from "@/models/categories-media";
import { apiService } from "@/services/api.service";
import { firestore } from '@/services/firebase.service';
import { collection, getDocs } from 'firebase/firestore';

const categoryMediaApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query<Array<CategoryMedia>, void>({
            providesTags: ['CategoryMedia'],
            keepUnusedDataFor: 3600,
            async queryFn() {
                try {
                    const ref = collection(firestore, 'categories-media')
                    const querySnapshot = await getDocs(ref)
                    const CategoryMedia: Array<CategoryMedia> = []
                    querySnapshot?.forEach((doc) => {
                        CategoryMedia.push({ id: doc.id, ...doc.data() as CategoryMedia })
                    })
                    return { data: CategoryMedia }
                } catch (error: any) {
                    return { error: error?.message }
                }
            },
        })
    })
})

export { categoryMediaApi };

