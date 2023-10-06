
import FacebookIcon from "@mui/icons-material/Facebook"; // 
import InstagramIcon from "@mui/icons-material/Instagram"; // 
import TwitterIcon from "@mui/icons-material/Twitter"; // 
import { Grid, IconButton, Link, Typography } from "@mui/material";

const footerStyle = {
  backgroundColor: "#5BC0BE", 
  color: "#fff", 
  padding: "24px", 
};

const iconStyle = {
  marginRight: "8px", 
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" style={{ marginBottom: "16px" }}>
            Build Your PC
          </Typography>
          <Typography variant="body2">
            Design and customize your dream PC configuration with us.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1">Follow us:</Typography>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
