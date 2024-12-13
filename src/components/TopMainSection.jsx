import { Col, NavLink, Row } from "react-bootstrap";

const TopMainSection = () => {
  return (
    <>
      <Col xs={12} md={11} className="mainPage">
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <NavLink className="special" href="#">
              TRENDING
            </NavLink>
            <NavLink className="special" href="#">
              PODCAST
            </NavLink>
            <NavLink className="special" href="#">
              MOODS AND GENRES
            </NavLink>
            <NavLink className="special" href="#">
              NEW RELEASES
            </NavLink>
            <NavLink className="special" href="#">
              DISCOVER
            </NavLink>
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default TopMainSection;
