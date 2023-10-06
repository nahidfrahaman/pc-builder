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
  
  const AllProducts = ({products : allproducts }) => {
    
 
     const products = allproducts?.data?.map((products)=> products)
     console.log(products?.map((product)=> console.log(product?.products[0]
      )))

    const cardHeight = 500;
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
                    src={product?.products[0]?.image}
                    alt={product?.products[0]?.image}
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
                      Category: {product?.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      Name: {product?.products[0]?.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Price: {product?.products[0]?.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Status: {product?.products[0]?.status}
                    </Typography>
  
                    <Typography
                      variant="body1"
                      style={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      Rating:{" "}
                      <Rating
                        value={product?.products[0]?.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Typography>
  
                    <Link href={`/products/${product?.products[0]?.id}`} passHref>
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
  
  export default AllProducts;
  