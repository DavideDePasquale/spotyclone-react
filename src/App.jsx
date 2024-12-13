import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import MainSection from "./components/MainSection";
import TopMainSection from "./components/TopMainSection";
import EndBar from "./components/EndBar";
import MainSection2 from "./components/MainSection2";
function App() {
  return (
    <>
      <Container>
        <Row>
          <SideBar />
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <TopMainSection />
            <MainSection nomeArtista="Lazza" genres="Hip Hop Classic" />
            <MainSection nomeArtista="Emis Killa" genres="Rap Classic" />
            <MainSection2 nomeArtista="Eminem" genres="Rap God" />
            <EndBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
