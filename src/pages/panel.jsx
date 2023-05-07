import React from 'react';
import {
  Card,
  Col,
  Container,
  Row,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Produto } from './produto';

export function Panel(params) {
  return (
    <Card className="blur-card bg-light opacity-75 text-secondary text-center mt-5">
      <Card.Header>
        <h3 className="card-title">Calcule seus custos</h3>
      </Card.Header>
      <Card.Body>
        <Container>
          <Produto />
       
          
        </Container>
      </Card.Body>
    </Card>
  );
}
