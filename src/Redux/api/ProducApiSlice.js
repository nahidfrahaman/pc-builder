import { Api } from "./Api"


 const productApiSlice = Api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => '/allproducts',
    }),
    getSingleProduct : build.query({
      query : (id) => `/products/${id}`
    })
  }),
  overrideExisting: false,
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApiSlice