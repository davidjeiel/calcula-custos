import React, { useEffect, useState } from "react";
import { Lista } from "../Lista";

export function Produto({produto, setProduto})
{
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    useEffect(()=>{
        setProduto({
            "nome": nome,
            "valor": valor
        });
        console.debug(produto);
    }, [nome, valor ])

    return(
        <div className="input-group" style={{height: "75px"}}>
            <span className="input-group-text">
                Produto
            </span>            
            <input 
                className="form-control" 
                value={produto.nome} 
                placeholder="Nome" 
                style={{width: "40%"}}
                id="nome_produto"
                onChange={(e)=>setNome(e.target.value)}
            />
            <input 
                className="form-control" 
                value={produto.valor} 
                placeholder="Valor de venda"
                id="valor_produto"
                onChange={(e)=>setValor(e.target.value)}
            />
        </div>
    )
}