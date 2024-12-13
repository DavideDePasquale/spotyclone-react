import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const EndBar = () => {
  const selectedMusic = useSelector((state) => state.music.selectedMusic);
  return (
    <>
      <div className="container-fluid position-fixed fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-between">
                {selectedMusic ? (
                  <div className="d-flex">
                    <Image
                      src={selectedMusic.album.cover_xl}
                      style={{ maxWidth: "88px" }}
                    />
                    <div className="align-content-center ms-2">
                      <p className="d-block mb-0">
                        {" "}
                        <cite className="fsSpecial3">Canzone: </cite>
                        &quot;{selectedMusic.title}&quot;
                      </p>

                      <p>
                        {" "}
                        <cite className="fsSpecial3"> Artista:</cite>{" "}
                        {selectedMusic.artist.name}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <Col sm={6} md={5} className="playerControls mt-2 ">
                  <div className="d-flex">
                    <a href="#">
                      <Image
                        src="/src/assets/playerbuttons/shuffle.png"
                        alt="shuffle"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/src/assets/playerbuttons/prev.png"
                        alt="prev"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/src/assets/playerbuttons/play.png"
                        alt="play"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/src/assets/playerbuttons/next.png"
                        alt="next"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/src/assets/playerbuttons/repeat.png"
                        alt="repeat"
                      />
                    </a>
                  </div>
                  <div className="progress mt-3">
                    <div role="progressbar"></div>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default EndBar;
