import { Form, Modal, Button } from "react-bootstrap"
import { useState, useContext } from "react";
import { postUrheilija } from "../services/urheilijat";
import { UrheilijaContext } from "../context/UrheilijaContext";

const UrheilijaModal = ({ show, close }) => {
  const { urheilijat, setUrheilijat } = useContext(UrheilijaContext);
  const [urheilijaInfo, setUrheilijaInfo] = useState({
    etunimi: '',
    sukunimi: '',
    kutsumanimi: '',
    syntymavuosi: '',
    paino: '',
    linkkiKuvaan: '',
    laji: '',
    saavutukset: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('info', urheilijaInfo);
    const newUrheilija = await postUrheilija(urheilijaInfo);
    setUrheilijat([...urheilijat, newUrheilija.data]);
    close();
  };


  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>Lisää Urheilija</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>Etunimi</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.etunimi}
              value={urheilijaInfo.etunimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, etunimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sukunimi</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.sukunimi}
              value={urheilijaInfo.sukunimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, sukunimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kutsumanimi</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.kutsumanimi}
              value={urheilijaInfo.kutsumanimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, kutsumanimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Syntymävuosi</Form.Label>
            <Form.Control
              type='date'
              placeholder={urheilijaInfo.syntymavuosi}
              value={urheilijaInfo.syntymavuosi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, syntymavuosi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Paino</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.paino}
              value={urheilijaInfo.paino}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, paino: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Linkki kuvaan</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.linkkiKuvaan}
              value={urheilijaInfo.linkkiKuvaan}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, linkkiKuvaan: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Laji</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.laji}
              value={urheilijaInfo.laji}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, laji: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Saavutukset</Form.Label>
            <Form.Control
              type='text'
              placeholder={urheilijaInfo.saavutukset}
              value={urheilijaInfo.saavutukset}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, saavutukset: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type='submit'>Lisää urheilija</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
};

export default UrheilijaModal;