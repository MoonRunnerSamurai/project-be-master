// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'


// initialize an empty api service that we'll inject endpoints into later as needed
export const apiService = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({}),
    tagTypes: ['ContentMedia', 'CategoryMedia']
})
