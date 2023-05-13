import React, { useState } from 'react';
import {
  Card,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './header';
import { Produto } from './forms/Produto';
import { MateriaPrima } from './forms/MateriaPrima';

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
    </>
  );
}
