
const UrheilijaCard = () => {

  const urheilijat = [];

  return (
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
  )
}

export default UrheilijaCard;