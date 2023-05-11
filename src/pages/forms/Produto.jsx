import React, { useEffect, useState } from "react";
import { Lista } from "../Lista";

export function Produto({produto, setProduto})
{
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');

    useEffect(()=>{
        setProduto({
            "nome": nome,
            "valor": valor,
            "quantidade": quantidade
        });
        console.debug(produto);
    }, [nome, valor, quantidade])

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
            <input 
                className="form-control" 
                value={produto.quantidade} 
                placeholder="Quantidade vendida por mês"
                id="quantidade_produto"
                onChange={(e)=>setQuantidade(e.target.value)}
            /> 
        </div>
    )
}