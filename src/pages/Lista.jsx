import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { LinhaMateriaPrima } from "./forms/LinhaMateriaPrima";

export function Lista({materiaPrima, setMateriaPrima})
{
    const [linhas, setLinhas] = useState('');

    useEffect(()=>{
        let tabela = materiaPrima !== '' && materiaPrima.map( (materia, index)=>{
          return(
            <LinhaMateriaPrima 
                id={materia.id}
                key={index}
                nome={materia.nome}
                tipo={materia.tipo}
                quantidade={materia.quantidade}
                materiaPrima={materiaPrima} 
                setMateriaPrima={setMateriaPrima}
            />
          )
        });
        setLinhas(tabela);
        console.debug( tabela );
    }, [materiaPrima])
    return(                                 
        <table className="table table-bordered table-striped table-hover mt-2">
            <thead>
                <tr className="text-center active">
                    <th style={{ width: "50%" }}>Matéria Prima</th>
                    <th>Tipo de Medida</th>
                    <th>Fração</th>  
                    <th style={{paddingBottom: "2%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </th>                       
                </tr>
            </thead>
            <tbody>
                {  linhas }    
            </tbody>
        </table>
    )
}