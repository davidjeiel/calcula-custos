import React, { Children } from "react";
import { Card, Table } from 'react-bootstrap'
import { MateriaPrima } from "../produto/MateriaPrima";

export function Lista(params)
{
    return(
        <Card className="card-body mt-2">            
            <div className='card-title'>
                <h3>Matéria prima</h3>
            </div>
            <MateriaPrima />
            <table className="table table-bordered table-striped table-hover mt-2">
                <thead>
                    <tr className="text-center active">
                        <th>Produto</th>
                        <th>Medida</th>
                        <th>Quantidade</th>
                        <th>Valor</th>                        
                        <th>Fração</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className="text-center">teste</td>
                        <td  className="text-center">teste</td>
                        <td  className="text-center">teste</td>
                        <td  className="text-center">teste</td>
                        <td  className="text-center">teste</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}