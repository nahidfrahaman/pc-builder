import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const Category = ({category}) => {
    console.log(category?.data.map((category)=> console.log(category
      )))
  return (
    <div>
         <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Our Product Categories
      </Typography>
      <Grid container spacing={3} mt={4}>
        {category?.data?.map((c) => (
          <Grid item key={c.id} xs={12} sm={6} md={4} lg={3}>
            <Link
              href={`/category/${c?.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="Card-root"
                style={{
                  // maxWidth: cardWidth,
                  width: "100%",
                  height: '',
                }}
              >
                <CardActionArea>
                  <Image
                    width={300}
                    height={280}
                    src={c.image}
                    alt={c.categories_name}
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
                      {c.categories_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default Category