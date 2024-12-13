import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectMusic } from "../redux/actions";
// PROF, HO CREATO LA MAINSECTION2 PERCHè LO SCROLL DELLA PAGINA ARRIVAVA IN FONDO MA, AVENDO LA ENDBAR FIXATA, MI COPRIVA PARTE
// DEL CONTENUTO DELL'ULTIMA FETCH. ALLORA HO AGGIRATO IL SISTEMA CON UNA COPIA DI UNA MAINSECTION, COSI DA RICHIAMARLA NELL'APP.JSX
// COSI POTEVO APPLICARE SOLO ALL'ULTIMA MAINSECTION, UN MARGIN BOTTOM.. COSI NON VENIVA COPERTO NULLA :)) SO CHE NON SI FA COSI, PERDONAMI,
// MA STAVO SCLERANDO TROPPO
const MainSection2 = ({ nomeArtista, genres }) => {
  const [musica, setMusica] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fillMusicSection = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            nomeArtista
        );
        if (response.ok) {
          let resp = await response.json();
          setMusica(resp.data);
          console.log(resp.data);
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    fillMusicSection();
  }, [nomeArtista]);

  const handleClick = (track) => {
    dispatch(selectMusic(track));
  };
  return (
    <>
      <Row>
        <Col style={{ marginBottom: "100px" }}>
          <div className="mt-3" style={{ color: "white" }}>
            <h2>{genres}</h2>
            <div className="d-flex flex-wrap">
              {musica.slice(0, 4).map((track) => (
                <Row key={track.id}>
                  <Col sm={12} className="imgLinks py-1 mt-0">
                    <Card
                      className="bg-transparent text-white text-center mx-2 border-0"
                      onClick={() => handleClick(track)}
                    >
                      <Card.Img
                        variant="top"
                        src={track.album.cover_big}
                        className=" rounded-0 "
                      />
                      <Card.Body>
                        <Card.Title className="fsSpecial2">
                          Track: &quot;{track.title}&quot;
                        </Card.Title>
                        <Card.Subtitle className=" text-white fsSpecial2">
                          Artist : {track.artist.name}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default MainSection2;
