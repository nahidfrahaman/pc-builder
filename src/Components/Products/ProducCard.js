import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Rating,
    Typography
} from "@mui/material";
import Link from "next/link";



const ProductCard = ({product}) => {
    console.log( 'from productCard', product)
  return <>
         <Card
              className="Card-root"
              style={{
                width: "100%",
                
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
                //   src={product.image}
                //   alt={product.name}
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
                    Category:
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    Name: 
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Price: 
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Status: 
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Rating:{" "}
                    <Rating
                      value=''
                      precision={0.5}
                      readOnly
                    />
                  </Typography>

                  <Link href={`/products/$`} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ textDecoration: "none" }}
                    >
                      Details
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>   
  </>
}

export default ProductCard