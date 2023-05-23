import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function Lista({materiaPrima, setMateriaPrima})
{
    const [lista, setLista] = useState('');

    const handleTrash = (indice)=>{
        //
    }

    useEffect(()=>{
        let tabela = materiaPrima !== '' && materiaPrima.map((index, materia)=>{
          return(
            <tr key={materia.id} id={ materia.id }>
                <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.nome }</td>
                <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.tipo }</td>
                <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.quantidade }</td>
                <td  className="text-center">
                    <input className="form-control" value={ materia.quantidade }/>
                </td>
                <td className="mt-2">
                    <Button variant="secondary" onClick={()=>handleTrash(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </Button>
                </td>     
            </tr> 
          )   
        });
        setLista(tabela);
    }, [materiaPrima])
    return(                                 
        <table className="table table-bordered table-striped table-hover mt-2">
            <thead>
                <tr className="text-center active">
                    <th style={{ width: "50%" }}>Matéria Prima</th>
                    <th>Tipo de Medida</th>
                    <th>Quantidade por produto</th>
                    <th>Valor</th>  
                    <th style={{paddingBottom: "2%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </th>                       
                </tr>
            </thead>
            <tbody>
                {  lista }    
            </tbody>
        </table>
    )
}