import React, { useState } from "react";
import { Lista } from "../Lista";

export function Produto(params)
{
    const [ produto, setProduto ] = useState('');
    return(
        <div className="input-group" style={{height: "75px"}}>
            <span className="input-group-text">
                Produto
            </span>
            <input className="form-control" placeholder="Nome" style={{width: "40%"}}/>
            <input className="form-control" placeholder="Valor de venda"/>
            <input className="form-control" placeholder="Quantidade vendida por mês"/>                
        </div>
    )
}