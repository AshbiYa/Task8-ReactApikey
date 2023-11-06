import Navbar from "../Components/Navbar";

import React, { useState, useEffect } from "react";
import Img1 from "../assets/img1.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Container>
      <h1 style={{ marginTop: "100px" }}>Photo Gallery</h1>
      <Row>
        {galleryData.map((Gallery) => (
          <Col key={galleryData.id} xs={12} md={6} lg={3} sm={12}>
            <Card style={{ margin: "20px" }}>
              <Card.Img src={Img1} alt={Gallery.title} />
              <Card.Body className="bg-primary">
                <Card.Title>{Gallery.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Navbar />
    </Container>
  );
};

export default Gallery;
