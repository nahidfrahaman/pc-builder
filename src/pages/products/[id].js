
import { useGetSingleProductQuery } from "@/Redux/api/ProducApiSlice";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";






const RootLayout = dynamic(
  () => import("../../Components/Layout/RootLayOut"),
  {
    ssr: false,
  }
);

const ProductDetailsPage = () => {
  const [userReview, setUserReview] = useState({
    author: "",
    rating: 0,
    comment: "",
  });
 
  const router = useRouter()

  const {data, isLoading , error} = useGetSingleProductQuery(router.query.id)
  



  const product = data?.data
  console.log(data?.data)




  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    setUserReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleReviewSubmit = () => {
    const newReview = { ...userReview };
    product?.product?.reviews.push(newReview);
    setUserReview({ author: "", rating: 0, comment: "" });
  };
  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              style={{ height: "auto", width: "100%" }}
              src={product?.image}
              alt={product?.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {product?.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Brand:</strong> {product?.key_features.Brand}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Model:</strong> {product?.key_features.Model}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Specification:</strong>{" "}
                {product?.key_features.Specification}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Socket:</strong> {product?.key_features.Socket}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Clock Speed:</strong>{" "}
                {product?.key_features["Clock Speed"]}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>TDP:</strong> {product?.key_features.TDP}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Price:</strong> {product?.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Status:</strong> {product?.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Individual Rating:</strong>{" "}
                <Rating
                  value={product?.individual_rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Average Rating:</strong>{" "}
                <Rating
                  value={product?.average_rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Description:</strong> {product?.description}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Reviews:
              </Typography>
              {product?.reviews?.map((review) => (
                <Box key={review._id} mt={1} p={1} border={1}>
                  <Typography variant="body1" gutterBottom>
                    <strong>Author:</strong> {review.author}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Rating:</strong> {review.rating}
                  </Typography>
                  <Typography variant="body1">{review.comment}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Review Form */}
      <Box mt={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add Your Review:
        </Typography>
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          name="author"
          value={userReview.author}
          onChange={handleReviewChange}
          margin="normal"
        />
        <TextField
          label="Rating"
          variant="outlined"
          fullWidth
          name="rating"
          type="number"
          value={userReview.rating}
          onChange={handleReviewChange}
          margin="normal"
        />
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          name="comment"
          value={userReview.comment}
          onChange={handleReviewChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
};
export default ProductDetailsPage;
ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

