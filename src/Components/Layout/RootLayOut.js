import Container from '@mui/material/Container';
import Footer from '../Ui/Footer/Footer';
import Navbar from '../Ui/Navbar/Navbar';


const RootLayOut = ({children}) => {
  return (
    <Container 
    disableGutters>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </Container>
  )
}

export default RootLayOut