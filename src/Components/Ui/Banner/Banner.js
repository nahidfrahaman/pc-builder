import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const BannerSection = () => {
  return (
    <Box
      sx={{
        background:
          'url("https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Update with the actual image file name
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 64px)", // Adjust the height as needed (excluding the header height)
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        marginTop : "9px"
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Build Your <span style={{color: '#9c27b0'}}>DRem</span>

      </Typography>
      <Typography variant="h5" gutterBottom>
        Customize and create your Own Pc
      </Typography>

      <Link href={"/pc-builder"}>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default BannerSection;
