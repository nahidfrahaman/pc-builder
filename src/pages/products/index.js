import { useGetAllProductsQuery } from "@/Redux/api/ProducApiSlice"

const ProductHomePage = () => {

    const {data, isLoading, error} = useGetAllProductsQuery()
    console.log(data, isLoading, error)
  return (
    <div>ProductHomePage</div>
  )
}

export default ProductHomePage