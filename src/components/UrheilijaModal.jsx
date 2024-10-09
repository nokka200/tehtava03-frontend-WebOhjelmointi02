import { Form, Modal, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { postUrheilija, updateUrheilija } from "../services/urheilijat";
import { UrheilijaContext } from "../context/UrheilijaContext";

const UrheilijaModal = ({ show, close, initialData }) => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  useEffect(() => {
    console.log('in effect', initialData);
    console.log('urheilijaInfo', urheilijaInfo);
    if (initialData) {
      console.log('in effect if', initialData);
      setUrheilijaInfo({
        ...initialData,
        syntymavuosi: formatDate(initialData.syntymavuosi)
      });
    } else {
      setUrheilijaInfo({
        etunimi: '',
        sukunimi: '',
        kutsumanimi: '',
        syntymavuosi: '',
        paino: '',
        linkkiKuvaan: '',
        laji: '',
        saavutukset: ''
      });
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialData) {
      // Update existing athlete
      const updatedUrheilija = await updateUrheilija(urheilijaInfo);
      setUrheilijat(urheilijat.map(urheilija => urheilija.id === updatedUrheilija.data.id ? updatedUrheilija.data : urheilija));
    } else {
      // Add new athlete
      const newUrheilija = await postUrheilija(urheilijaInfo);
      setUrheilijat([...urheilijat, newUrheilija.data]);
    }
    close();
    setUrheilijaInfo({
      etunimi: '',
      sukunimi: '',
      kutsumanimi: '',
      syntymavuosi: '',
      paino: '',
      linkkiKuvaan: '',
      laji: '',
      saavutukset: ''
    });
  };

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Muokkaa Urheilijaa" : "Lisää Urheilija"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>Etunimi</Form.Label>
            <Form.Control
              type='text'
              placeholder="Etunimi"
              value={urheilijaInfo.etunimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, etunimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sukunimi</Form.Label>
            <Form.Control
              type='text'
              placeholder="Sukunimi"
              value={urheilijaInfo.sukunimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, sukunimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kutsumanimi</Form.Label>
            <Form.Control
              type='text'
              placeholder="Kutsumanimi"
              value={urheilijaInfo.kutsumanimi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, kutsumanimi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Syntymävuosi</Form.Label>
            <Form.Control
              type='date'
              placeholder="Syntymävuosi"
              value={urheilijaInfo.syntymavuosi}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, syntymavuosi: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Paino</Form.Label>
            <Form.Control
              type='text'
              placeholder="Paino"
              value={urheilijaInfo.paino}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, paino: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Linkki kuvaan</Form.Label>
            <Form.Control
              type='text'
              placeholder="Linkki kuvaan"
              value={urheilijaInfo.linkkiKuvaan}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, linkkiKuvaan: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Laji</Form.Label>
            <Form.Control
              type='text'
              placeholder="Laji"
              value={urheilijaInfo.laji}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, laji: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Saavutukset</Form.Label>
            <Form.Control
              type='text'
              placeholder="Saavutukset"
              value={urheilijaInfo.saavutukset}
              onChange={(e) => setUrheilijaInfo({ ...urheilijaInfo, saavutukset: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type='submit'>{initialData ? "Päivitä urheilija" : "Lisää urheilija"}</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UrheilijaModal;