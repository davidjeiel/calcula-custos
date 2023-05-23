import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './header/Header';
import { Produto } from './forms/Produto';
import { MateriaPrima } from './forms/MateriaPrima';
import { Lista } from './Lista';

export function Panel(params) 
{
  const [produto, setProduto] = useState({
    nome:"",
    valor: "",
    quantidade:""
  });
  const [materiaPrima, setMateriaPrima ] = useState([]);

  return (
    <>
      <Header />
      <Card className="blur-card bg-light opacity-75 text-secondary text-center mt-5">
        <Card.Header>
          <h2 className="card-title text-uppercase">Calcule seus custos diretos</h2>
        </Card.Header>
        <Card.Body>
          <Container>                        
            <Produto 
              produto={produto}
              setProduto={setProduto}
            />
            <MateriaPrima 
              materiaPrima={materiaPrima}
              setMateriaPrima={setMateriaPrima}
            />            
          </Container>
        </Card.Body>
      </Card>
      <Card className="blur-card bg-light opacity-75 text-secondary text-center mt-5">
        <Card.Header>
          <Card.Title>
            <Row>
              <Col md={10}>
                <h3>
                  Lista de Matérias Primas
                </h3>
              </Col>
              <Col md={2}>
                <Button className='rounded-circle btn-secondary p-2 mt-2 opacity-20'>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-arrow-down-short" 
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                  </svg>
                </Button>
              </Col>
            </Row>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Lista 
            materiaPrima={materiaPrima}
            setMateriaPrima={setMateriaPrima}
          />
        </Card.Body>
      </Card>
    </>
  );
}
