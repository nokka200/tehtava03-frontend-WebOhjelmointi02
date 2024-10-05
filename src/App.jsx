import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { getAll } from "./services/urheilijat.js"

function App() {
  const [urheilijat, setUrheilijat] = useState([]);

  const borderStyle = {
    border: "solid",
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAll();
      setUrheilijat(data.data);
    };

    console.log(urheilijat);
    fetchData();
  }, []);

  if (urheilijat.length === 0) {
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

  return (
    <Container style={borderStyle}>
      <Row style={borderStyle}>
        <Col style={borderStyle}>
          <h1>Urheilijat App</h1>
        </Col>
      </Row>
      <Row style={borderStyle}>
      {urheilijat.map((urheilija) => (
          <Card key={urheilija.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={urheilija.image || "holder.js/100px180"} />
            <Card.Body>
              <Card.Title>{urheilija.etunimi}</Card.Title>
              <Card.Text>{urheilija.sukunimi}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default App
