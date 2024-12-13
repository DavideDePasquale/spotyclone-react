import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import MainSection from "./components/MainSection";
import TopMainSection from "./components/TopMainSection";
import EndBar from "./components/EndBar";
import MainSection2 from "./components/MainSection2";

function App() {
  const nomeArtista = "Lazza";
  const nomeArtista2 = "Emis Killa";
  const nomeArtista3 = "Eminem";
  const genres = "Hip Hop Classic";
  const genres2 = "Rap Classic";
  const genres3 = "Rap God";
  return (
    <>
      <Container>
        <Row>
          <SideBar />
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <TopMainSection />
            <MainSection nomeArtista={nomeArtista} genres={genres} />
            <MainSection nomeArtista={nomeArtista2} genres={genres2} />
            <MainSection2 nomeArtista={nomeArtista3} genres={genres3} />
            <EndBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
