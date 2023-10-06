import { Api } from "./Api"


 const CategoryApiSlice = Api.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => '/allcategories',
    }),
    getSingleCategory : build.query({
      query : (id) => `/allcategories/${id}`
    })
  }),
  overrideExisting: false,
})

export const { useGetAllCategoryQuery, useGetSingleCategoryQuery} =CategoryApiSlice