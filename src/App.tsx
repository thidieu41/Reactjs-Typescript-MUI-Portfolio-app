import { Box, Container } from "@mui/material";
import Header from "./Layout/Header";
import Banner from "./Components/Banner";
import Introduce from "./Components/Introduce";
import Experience from "./Components/Experiences";
import Skills from "./Components/Skills";
import Footer from "./Layout/Footer";
// import Languages from "./Components/Languages";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Box
          sx={{
            marginX: 10,
          }}
        >
          <Banner />
          <Introduce />
          <Skills />
          {/* <Languages/> */}
          <Experience />
         
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
