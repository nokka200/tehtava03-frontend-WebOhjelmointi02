import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState, useContext } from "react";
import { getAll } from "./services/urheilijat.js"
import { UrheilijaContext } from "./context/UrheilijaContext"
import UrheilijaModal from "./components/UrheilijaModal.jsx";

function App() {
  const urheilijaContext = useContext(UrheilijaContext);
  const [show, setShow] = useState(false);

  const borderStyle = {
    border: "solid",
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      urheilijaContext.setUrheilijat(data.data);
    };

    fetchData();
  }, []);

  if (urheilijaContext.urheilijat.length === 0) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Urheilijat App</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    )
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
      <Container style={borderStyle}>
        <Row style={borderStyle}>
          <Col style={borderStyle}>
          <h1>Urheilijat App</h1>
        </Col>
        <Button variant="primary" onClick={handleShow}>Lisää urheilija</Button>
        </Row>
        <Row style={borderStyle}>
          {urheilijaContext.urheilijat.map((urheilija) => (
            <Card key={urheilija.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={urheilija.image || "holder.js/100px180"} />
              <Card.Body>
                <Card.Title>Urheilija</Card.Title>
                <Card.Text>{urheilija.etunimi}</Card.Text>
                <Card.Text>{urheilija.sukunimi}</Card.Text>
                <Button variant="primary">Lisätiedot</Button>
              </Card.Body>
            </Card>
          ))}
      </Row>
      <UrheilijaModal show={show} close={handleClose} />
      </Container>
  )
}

export default App
