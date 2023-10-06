import { useGetSingleCategoryQuery } from "@/Redux/api/CategoryApiSlice";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
  
  import Link from "next/link";
import { useRouter } from "next/router";
  
  const Categories= ({products : allproducts }) => {
    
     const router = useRouter()
     const {data }  = useGetSingleCategoryQuery(router.query.id)
    
     const products = data?.data?.products
     console.log(products)

    const cardHeight = 510;
    return (
      <Box
        style={{
          marginBottom: "4rem",
          padding: "4rem",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Our Featured Products
        </Typography>
        <Grid container spacing={3} mt={4}>
          {products?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  overflow : 'hidden'
                }}
                className="Card-root"
                style={{
                  width: "100%",
                  height: cardHeight,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={product?.image}
                    alt={product?.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      style={{
                        marginBottom: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      Category: {product?.name.slice(0,25)}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      Name: {product?.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Price: {product?.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Status: {product?.status}
                    </Typography>
  
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Rating:{" "}
                      <Rating
                        value={product?.average_rating
                        }
                        precision={0.5}
                        readOnly
                      />
                    </Typography>
  
                    <Link href={`/products/${product?.id}`} passHref>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ textDecoration: "none" }}
                      >
                        Details
                      </Button>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Categories
  



// export async function getStaticPaths() {
  
//     const res = await fetch('http://localhost:5000/categories')
//     const posts = await res.json()
//    console.log(posts)
//     const paths = posts.map((post) => ({
//       params: { id: post.id },
//     }))
   
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }



  // export async function getStaticProps({ params }) {
  //   // params contains the post `id`.
  //   // If the route is like /posts/1, then params.id is 1
  //   const res = await fetch(`http://localhost:5000/categories/${params.id}`)
  //   const post = await res.json()
   
  //   // Pass post data to the page via props
  //   return { props: { post } }
  // }