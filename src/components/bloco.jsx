import React from "react";
import { Card } from 'react-bootstrap'

export function Bloco(params)
{
    return(
        <Card className={params.classe+" bloco-sombra"} >
            <Card.Header className="card-title">
                <h3 className="text-center">
                    {params.titulo}
                </h3>
            </Card.Header>
            <Card.Body>
                <h1 className="text-center">
                    {params.valor}
                </h1>
            </Card.Body>
        </Card>
    )
}