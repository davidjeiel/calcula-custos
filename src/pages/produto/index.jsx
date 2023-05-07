import React, { useState } from "react";
import { Lista } from "../lista";

export function Produto(params)
{
    const [ produto, setProduto ] = useState('');
    return(
        <>
            <div className="input-group">
                <span className="input-group-text">
                    Produto
                </span>
                <input className="form-control" placeholder="Nome"/>
                <input className="form-control" placeholder="Valor de venda"/>
                <input className="form-control" placeholder="Quantidade por mês"/>
                <button className="btn btn-outline-success">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-play-fill" 
                        viewBox="0 0 16 16"
                    >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                </button>
            </div>
            { 
                //produto.length() > 0 && 
                <Lista dados={produto}/> 
            }
            
        </>
    )
}