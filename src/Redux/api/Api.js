
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api= createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pc-builder-backend-iota.vercel.app/api/v1/' }),
  endpoints: (builder) => ({ }),
})


