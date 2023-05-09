import React, { useState } from 'react';
import {
  Card,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './header';
import { Lista } from './Lista';
import { Produto } from './forms/Produto';
import { MateriaPrima } from './forms/MateriaPrima';

export function Panel(params) 
{
  const [produto, setProduto] = useState();
  const [materiaPrima, setMateriaPrima ] = useState([]);

  return (
    <>
      <Header />
      <Card className="blur-card bg-light opacity-75 text-secondary text-center mt-5">
        <Card.Header>
          <h3 className="card-title">Calcule seus custos</h3>
        </Card.Header>
        <Card.Body>
          <Container>                        
            <Produto />
            <MateriaPrima />
            <Lista />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
