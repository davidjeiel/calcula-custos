import React from "react";
import { Button } from "react-bootstrap";

export function LinhaMateriaPrima({
    id, 
    key, 
    nome, 
    tipo, 
    materiaPrima,
    setMateriaPrima
}){

    const handleTrash = (id)=>{
        let arr  = materiaPrima;    
        // FIXME: Corrigir a função de exclusão dos itens, RETIRANDO APENAS O SELECIONADO
        let novaLista = arr.splice( arr.filter( sel=> sel.id === id ), 1);        
        setMateriaPrima( novaLista )  ;
    }

    return(
        <tr key={key} id={ id }>
                <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ nome }</td>
                <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ tipo }</td>
                
                <td  className="text-center">
                    <input className="form-control text-center" />
                </td>
                <td className="mt-2 text-center">
                    <Button variant="secondary" onClick={()=>handleTrash(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </Button>
                </td>     
            </tr> 
    )
}